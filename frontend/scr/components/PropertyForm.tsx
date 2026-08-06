// src/components/PropertyForm.tsx

import React, { useState } from 'react';
import locations from '../locations.json';
import { predictPrice } from '../api/apiClient';

export default function PropertyForm() {
  // State to hold the user inputs
  const [formData, setFormData] = useState({
    location: locations[0] || 'other',
    carpet_area_sqft: 1000,
    floor_num: 1,
    bathroom: 1,
    balcony: 1,
    car_parking: 1,
    furnishing: 'Unfurnished',
    transaction: 'Resale',
    ownership: 'Freehold',
    facing: 'East'
  });

  // State to hold the prediction result
  const [predictedPrice, setPredictedPrice] = useState<number | null>(null);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    // Convert numeric fields to float
    const isNumeric = ['carpet_area_sqft', 'floor_num', 'bathroom', 'balcony', 'car_parking'].includes(name);
    setFormData({
      ...formData,
      [name]: isNumeric ? parseFloat(value) : value
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await predictPrice(formData);
      setPredictedPrice(result.predicted_price);
    } catch (error) {
      console.error("Error fetching prediction:", error);
      alert("Failed to connect to the backend server.");
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Predict Real Estate Price</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        {/* Location Dropdown */}
        <label>
          Location:
          <select name="location" value={formData.location} onChange={handleChange} style={{ marginLeft: '10px' }}>
            {locations.map((loc, index) => (
              <option key={index} value={loc}>{loc}</option>
            ))}
          </select>
        </label>

        {/* Carpet Area */}
        <label>
          Carpet Area (sqft):
          <input type="number" name="carpet_area_sqft" value={formData.carpet_area_sqft} onChange={handleChange} style={{ marginLeft: '10px' }} />
        </label>

        {/* Bathrooms */}
        <label>
          Bathrooms:
          <input type="number" name="bathroom" value={formData.bathroom} onChange={handleChange} style={{ marginLeft: '10px' }} />
        </label>

        <button type="submit" style={{ marginTop: '10px', padding: '10px', cursor: 'pointer' }}>
          Predict Price
        </button>
      </form>

      {/* Display the result */}
      {predictedPrice !== null && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e0ffe0', color: '#005500' }}>
          <h3>Estimated Price: ₹{predictedPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h3>
        </div>
      )}
    </div>
  );
}