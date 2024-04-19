import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowBmi = () => {
    const [bmiResult, setBmiResult] = useState(null);
    let bmiStage = '';
    let bmiDescription = '';






    useEffect(() => {
        const fetchBmiData = async () => {
            try {
                const userdata = localStorage.getItem('user');
                const user = JSON.parse(userdata);
                const username = user.username;
                const response = await axios.post(`http://localhost:3001/diet/bmicalculator/${username}`);
                setBmiResult(response.data);
            } catch (error) {
                console.error('Error fetching BMI data:', error);
            }
        };

        fetchBmiData();
    }, []);

    const renderBmiResult = () => {
        if (bmiResult) {
            if (bmiResult.bmi < 18.5) {
                bmiStage = 'Underweight';
                bmiDescription = (
                    <div className="text-center">

               
                    <img

                    
                     src="https://thumbs.dreamstime.com/b/young-man-white-shirt-underweight-comic-cartoon-illustration-unhealthy-nutrition-article-image-vector-character-79246727.jpg" />
                  
                    <ul className="text-centerlist-disc mt-2">
                        <li>Weakened immune system</li>
                        <li>Nutritional deficiencies</li>
                        <li>Osteoporosis risk</li>
                    </ul>
                    </div>
                );
            } else if (bmiResult.bmi < 24.9) {
                bmiStage = 'Normal weight';
                bmiDescription = (
                    <div className="text-center">
                    <img 
                    
                    style={{ clipPath: 'inset(0px 0px 0px 5%)' }} 
                    src="https://as1.ftcdn.net/v2/jpg/01/23/13/32/1000_F_123133286_PqCz6irotVXrTNI803iIfH9Va5A7ArmP.jpg" />
                    <ul className="text-centerlist-disc mt-2">
                        <li>Lower risks of chronic diseases</li>
                        <li>Healthy BMI range</li>
                    </ul>
                    </div>
                );
            } else if (bmiResult.bmi < 29.9) {
                bmiStage = 'Overweight';
                bmiDescription = (
                    <div className="text-center">
                    <img src="https://banner2.cleanpng.com/20180302/ajw/kisspng-fat-adipose-tissue-royalty-free-clip-art-depressed-beer-belly-5a9927f1668d72.2385101015199866734201.jpg" alt="BMI Description" className="mx-auto mb-4" />
                    <ul className="text-centerlist-disc mt-2">
                        <li>Increased risks of type 2 diabetes</li>
                        <li>High blood pressure risk</li>
                        <li>Heart disease risk</li>
                        <li>Stroke risk</li>
                        <li>Risk of certain cancers</li>
                    </ul>
                    </div>
                );
            } else if (bmiResult.bmi < 34.9) {
                bmiStage = 'Obesity (Class 1)';
                bmiDescription = (
                    <div className="text-center">
                    <img src="https://banner2.cleanpng.com/20180302/ajw/kisspng-fat-adipose-tissue-royalty-free-clip-art-depressed-beer-belly-5a9927f1668d72.2385101015199866734201.jpg" alt="BMI Description" className="mx-auto mb-4" />
                    <ul className="text-centerlist-disc mt-2">
                        <li>Higher risks of type 2 diabetes</li>
                        <li>Increased risk of heart disease</li>
                        <li>Stroke risk</li>
                        <li>Risk of certain cancers</li>
                    </ul>
                    </div>
                );
            } else {
                bmiStage = 'Severe Obesity';
                bmiDescription = (
                    <div className="text-center">
                        <img src="https://banner2.cleanpng.com/20180302/ajw/kisspng-fat-adipose-tissue-royalty-free-clip-art-depressed-beer-belly-5a9927f1668d72.2385101015199866734201.jpg" alt="BMI Description" className="mx-auto mb-4" />
                        <ul className="text-left list-disc mt-2">
                            <li>Greatly increased risk of serious health conditions</li>
                            <li>Higher risk of type 2 diabetes</li>
                            <li>High blood pressure risk</li>
                            <li>Heart disease risk</li>
                            <li>Stroke risk</li>
                            <li>Risk of certain cancers</li>
                        </ul>
                    </div>
                );
                
            }

            return (
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">BMI Result</h2>
                    <p className="text-lg">BMI: {bmiResult.bmi.toFixed(2)} - {bmiStage}</p>
                    {bmiDescription}
                </div>
            );

            
        } else {
            return <p className="text-lg text-gray-700 mt-6">Loading BMI data...</p>;
        }


        
    };

    return (
<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-beige-100 to-beige-300">
    <div className="max-w-md w-full mt-10 bg-white rounded-lg shadow-lg">
        <div className="bg-gradient-to-r from-lime-50 to-lime-300 p-6 rounded-t-lg">
            <h2 className="text-3xl text-center font-bold text-gray-800 mb-4">BMI Result</h2>
        </div>
        <div className="p-6">
            {renderBmiResult()}
        </div>
    </div>
</div>

    );
};

export default ShowBmi;