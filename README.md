# 🏡 Real Estate Price Prediction Platform

A production-ready Machine Learning web application that estimates residential property prices using property characteristics and a trained predictive model.

## 📌 About the Project

This project demonstrates a complete end-to-end machine learning workflow, from data preprocessing and model training to deployment through a REST API and an interactive web interface. The application allows users to enter property details and receive an instant estimated market price.

The primary objective is to showcase how machine learning models can be integrated into a modern full-stack application for real-world decision support.

---

## 🚀 Features

- 🔹 Intelligent property price prediction
- 🔹 Clean and interactive React user interface
- 🔹 High-performance FastAPI backend
- 🔹 Trained Machine Learning model for real-time inference
- 🔹 Automated preprocessing pipeline
- 🔹 Support for categorical feature encoding
- 🔹 Feature scaling and data transformation
- 🔹 RESTful API architecture
- 🔹 Fast model loading with Joblib
- 🔹 Cross-Origin Resource Sharing (CORS) support

---

## 🧠 Machine Learning

### Models Evaluated
- Random Forest Regressor
- Linear Regression

### Data Processing
- Missing value handling
- Feature engineering
- Categorical encoding
- Numerical feature scaling
- Dataset cleaning
- Model evaluation using multiple regression metrics

---

## 💻 Technology Stack

### Machine Learning
- Python
- Scikit-Learn
- Pandas
- NumPy
- Joblib

### Backend
- FastAPI
- Uvicorn
- REST API

### Frontend
- React
- Vite
- JavaScript
- HTML
- CSS

---

## 📈 Workflow

```
Dataset
    │
    ▼
Data Cleaning
    │
    ▼
Feature Engineering
    │
    ▼
Model Training
    │
    ▼
Model Evaluation
    │
    ▼
Save Trained Model (.pkl)
    │
    ▼
FastAPI Backend
    │
    ▼
React Frontend
    │
    ▼
Real-Time Price Prediction
```

---

## ⚡ Performance

The application delivers real-time predictions by loading the trained model into memory during server startup, minimizing inference latency and providing a smooth user experience.

---

## 🎯 Project Goals

- Build a complete Machine Learning pipeline.
- Deploy a trained regression model through a REST API.
- Connect a modern frontend with a Python backend.
- Demonstrate end-to-end AI application development.
- Provide accurate and fast property price estimation.

---

## ▶️ Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Install Backend Dependencies

```bash
pip install -r requirements.txt
```

### 3. Start the Backend

```bash
uvicorn main:app --reload
```

### 4. Install Frontend Dependencies

```bash
npm install
```

### 5. Start the Frontend

```bash
npm run dev
```

---

## 📂 Project Structure

```
RealEstatePricePredictor/
│
├── Backend/
│   ├── main.py
│   ├── model.pkl
│   ├── scaler.pkl
│   └── encoder.pkl
│
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── Dataset/
│
├── notebooks/
│
└── README.md
```

---

## 📜 License

This project is intended for educational and portfolio purposes.
```bash
https://github.com/ziadbady85-sketch/ITI_ML/tree/main
