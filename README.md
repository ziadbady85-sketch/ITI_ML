# Real Estate Price Predictor 🏠🤖

An End-to-End Machine Learning Web Application that predicts real estate prices based on property specifications. 

## 🌟 Project Overview
This project is a complete AI full-stack application designed to replace guesswork with data-driven real estate pricing. It takes user inputs (like carpet area, location, number of bathrooms, etc.) and instantly calculates the estimated property value using a trained Machine Learning model.

## 🛠️ Tech Stack
- **Machine Learning:** Python, Scikit-Learn, Pandas, Joblib (Models: Random Forest & Linear Regression)
- **Backend:** FastAPI, Uvicorn (RESTful API for model inference)
- **Frontend:** React.js, Vite (Interactive UI for seamless user experience)

## 🚀 Key Features
- **Data Pipeline:** Robust preprocessing pipeline including encoding categorical variables and scaling numerical data.
- **Fast Inference:** The ML model (`.pkl`) is loaded in the backend memory on startup for instant predictions.
- **CORS Configured:** Secure and seamless communication between the React frontend and the Python backend.

## ⚙️ How to Run Locally

### 1. Clone the repository
```bash
git clone [https://github.com/OsamaSultan1345/Real-Estate-Price-Predictor.git](https://github.com/OsamaSultan1345/Real-Estate-Price-Predictor.git)
cd Real-Estate-Price-Predictor
