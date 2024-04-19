import React, { forwardRef } from 'react';
import slide1 from './slide1.jpg'
import HomeTwo2 from './hometwo2.jpg'
const HomeTwo = forwardRef((props, ref) => {

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-beige-100 to-beige-300">
            <div className="max-w-7xl mx-auto px-4 mt-8">
                <h2 className="text-4xl font-semibold text-gray-800 mb-4 text-center">What do you get?</h2>
                {/* First row */}
                <div className="flex justify-between items-center mb-8">
                    {/* First text and picture */}
                    <div className="flex items-start">
                        <div className="flex flex-col items-start pr-8"> 
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-left">Ready Meals</h2>
                            <p className="text-lg text-gray-700 mb-8 text-left">
                                To save your time, our specialists create balanced meals that you can enjoy without restrictions. It will allow you to prepare nutrition plans for patients faster than ever. We will enable you to instantly generate fully personalized menus in accordance with a wide range of calorie goals, preferences, and dietary restrictions.
                            </p>
                        </div>
                    </div>
                    <img src={slide1} alt="hometwo 1" style={{ width: '40%', height: 'auto', borderRadius: '10%' }} /> {/* Picture */}
                </div>
    
                {/* Second row */}
                <div className="flex justify-between items-center mb-8">
                    {/* Second text and picture */}
                    <div className="flex items-start">
                        <div className="flex flex-col items-start pr-8"> 
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-left">Nutritional Overview</h2>
                            <p className="text-lg text-gray-700 mb-8 text-left">
                                An easy-to-use nutritional interview will help you gather the necessary information about your 24-hour diet and enter your eating habits.
                            </p>
                        </div>
                    </div>
                    <img src={HomeTwo2} alt="HomeTwo2" style={{ width: '40%', height: 'auto', borderRadius: '50%' }} /> {/* Picture */}
                </div>
    
                {/* Can add more rows if we want */}
            </div>
        </div>
    );
    
    
    
});

export default HomeTwo;