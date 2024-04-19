import React, { useRef } from 'react';
import Slideshow from './SlideShow';


const Home = () => {
    const token = localStorage.getItem('token');
    const isLoggedIn = !!token;
    

    return (
        <div className="min h-screen flex flex-col items-center justify-center  bg-gradient-to-r from-beige-100 to-beige-300 ">
            <div className="flex justify-between w-full max-w-7x1 px-12">
                {/* Left side with buttons */}
                <div className="flex flex-col items-start justify-center w-1/2">
                <h1 className="text-4xl font-semibold text-gray-800 mb-4" style={{ fontFamily: 'Verdana, Geneva, sans-serif' }}>Eat Smart, Live Well</h1>
                <h1 className="text-4xl font-semibold text-gray-800 mb-4" style={{ fontFamily: 'Verdana, Geneva, sans-serif' }}>Your Personalized Path to Health!</h1>

                    <div className="flex flex-col items-start">
                        {!isLoggedIn && (
                            <>
                                <a href="/register" className="text-lg bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg mb-4 transition-all duration-300 ease-in-out transform hover:scale-105">Create an account</a>
                                <a href="/login" className="text-lg bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg mb-4 transition-all duration-300 ease-in-out transform hover:scale-105">Login</a>
                            </>
                        )}
                        {isLoggedIn && (
                            <a href="/dashboard" className="text-lg bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">Get started</a>
                        )}
                    </div>
                </div>
                {/* Right side with slideshow */}
                <div className="w-1/2">
                    <Slideshow />
                </div>
            </div>


        </div>
    );
};

export default Home;
