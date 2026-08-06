from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import pandas as pd
from contextlib import asynccontextmanager

# 1. Define the input schema (Pydantic Model) based on the training data
class PredictionRequest(BaseModel):
    location: str
    carpet_area_sqft: float
    floor_num: float
    bathroom: float
    balcony: float
    car_parking: float
    furnishing: str
    transaction: str
    ownership: str
    facing: str

# Global variable to hold the model
ml_models = {}

# 2. Load the model exactly once at startup (Lifespan)
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Load the model exported from the notebook
    ml_models["house_price_pipeline"] = joblib.load(R"D:\iti_project\backend\models\house_price_RF.pkl")
    yield
    # Clean up on shutdown
    ml_models.clear()

# 3. Initialize the FastAPI app
app = FastAPI(lifespan=lifespan)

# 4. Configure CORS to allow the frontend (React on port 5173) to communicate with the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to your frontend's URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 5. Health Check Route
@app.get("/health")
def health_check():
    return {"status": "ok"}

# 6. Prediction Route
@app.post("/predict")
def predict_price(request: PredictionRequest):
    # Convert incoming request to a single-row Pandas DataFrame
    # The columns must exactly match the names used during training
    input_data = pd.DataFrame([{
        "carpet_area_sqft": request.carpet_area_sqft,
        "floor_num": request.floor_num,
        "bathroom": request.bathroom,
        "balcony": request.balcony,
        "car_parking": request.car_parking,
        "location_grouped": request.location,
        "Furnishing": request.furnishing,
        "Transaction": request.transaction,
        "Ownership": request.ownership,
        "facing": request.facing
    }])
    
    # Run the model (the pipeline handles all imputing, scaling, and encoding automatically)
    log_prediction = ml_models["house_price_pipeline"].predict(input_data)[0]
    
    # Invert the log transformation (np.expm1) to get the real price
    import numpy as np
    real_price = np.expm1(log_prediction)
    
    return {"predicted_price": float(real_price)}