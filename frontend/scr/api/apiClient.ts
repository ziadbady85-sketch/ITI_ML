// src/api/apiClient.ts

export const predictPrice = async (propertyData: any) => {
    // قم بإيقاف السطر القديم
    // const baseUrl = import.meta.env.VITE_API_BASE_URL;
    
    // ضع الرابط مباشرة
    const baseUrl = "http://127.0.0.1:8000";
    
    const response = await fetch(`${baseUrl}/predict`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(propertyData),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
};
