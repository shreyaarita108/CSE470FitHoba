import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WorkoutVideo = () => {
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
                    <ul className="text-centerlist-disc mt-2">
                    <h1>For you the Suggested Videos are given here:</h1>
                    </ul>
                    </div>
                );
            } else if (bmiResult.bmi < 24.9) {
                bmiStage = 'Normal weight';
                bmiDescription = (
                    <div className="text-center">
                    <ul className="text-centerlist-disc mt-2">
                    <h1>For you the Suggested Videos are given here:</h1>
                    </ul>
                    </div>
                );
            } else if (bmiResult.bmi < 29.9) {
                bmiStage = 'Overweight';
                bmiDescription = (
                    <div className="text-center">
                    <ul className="text-centerlist-disc mt-2">
                    <h1>For you the Suggested Videos are given here:</h1>
                    </ul>
                    </div>
                );
            } else if (bmiResult.bmi < 34.9) {
                bmiStage = 'Obesity (Class 1)';
                bmiDescription = (
                    <div className="text-center">
                    <ul className="text-centerlist-disc mt-2">
                    <h1>For you the Suggested Videos are given here:</h1>
                    </ul>
                    </div>
                );
            } else {
                bmiStage = 'Severe Obesity';
                bmiDescription = (
                    <div className="text-center">
                    <ul className="text-centerlist-disc mt-2">
                    <h1>For you the Suggested Videos are given here:</h1>
                    </ul>
                    </div>
                );
                
            }

            return (
                <div className="text-center">
                   
                    <p className="text-lg">BMI: {bmiResult.bmi.toFixed(2)} - {bmiStage}</p>
                    {bmiDescription}
                </div>
            );

            
        } else {
            return <p className="text-lg text-gray-700 mt-6">Loading BMI data...</p>;
        }


        
    };
    const RenderVideoEmbed = () => {
        switch (bmiStage) {
            case 'Underweight':
                return (
                    <div>
                    <div className="max-w-md w-full mt-10 bg-white rounded-lg shadow-lg">
                    <div className="bg-gradient-to-r from-pink-200 to-pink-300 p-6 rounded-t-lg">
                        
                    </div>
                    <div className="p-6">
                        {/* Embedding YouTube Playlist Link */}
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/zlyqr9bNs1E?si=cCKkpy5MT8t93uPd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                    <div className="max-w-md w-full mt-10 bg-white rounded-lg shadow-lg">
                    <div className="bg-gradient-to-r from-pink-200 to-pink-300 p-6 rounded-t-lg">
                       
                    </div>
                    <div className="p-6">
                        {/* Embedding YouTube Playlist Link */}
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Qi0p-6XcTX0?si=L4P16KJdT_n0HUL-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                    <div className="max-w-md w-full mt-10 bg-white rounded-lg shadow-lg">
                    <div className="bg-gradient-to-r from-pink-200 to-pink-300 p-6 rounded-t-lg">
                    </div>
                    <div className="p-6">
                        {/* Embedding YouTube Playlist Link */}
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/FDpM-CGMXcw?si=zQf5jblIkhmuUtqp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                
                    </div>
                
                );
            case 'Normal weight':
                return (
                    <div>
    <div className="max-w-md w-full mt-10 bg-white rounded-lg shadow-lg">
    <div className="bg-gradient-to-r from-pink-200 to-pink-300 p-6 rounded-t-lg">
        
    </div>
    <div className="p-6">
        {/* Embedding YouTube Playlist Link */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JzAShhATDl8?si=_SMV5GF-1vXRCDI5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</div>
    <div className="max-w-md w-full mt-10 bg-white rounded-lg shadow-lg">
    <div className="bg-gradient-to-r from-pink-200 to-pink-300 p-6 rounded-t-lg">
       
    </div>
    <div className="p-6">
        {/* Embedding YouTube Playlist Link */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9o0UPuDBM8M?si=I7XiNyty0Cq13I19" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</div>
    <div className="max-w-md w-full mt-10 bg-white rounded-lg shadow-lg">
    <div className="bg-gradient-to-r from-pink-200 to-pink-300 p-6 rounded-t-lg">

    </div>
    <div className="p-6">
        {/* Embedding YouTube Playlist Link */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-hSma-BRzoo?si=zFhyEo_k05YqZMVd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</div>

    </div>
                );
                case 'Overweight':
                    return (
                        <div>
        <div className="max-w-md w-full mt-10 bg-white rounded-lg shadow-lg">
       
        <div className="p-6">
            {/* Embedding YouTube Playlist Link */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Co2UD3sVb0A?si=2wqJ3fQ22tw9mtW5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
        <div className="max-w-md w-full mt-10 bg-white rounded-lg shadow-lg">
        
           
        
        <div className="p-6">
            {/* Embedding YouTube Playlist Link */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8IwNI8r-jo0?si=jKcV34xtP6ODjlfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
        <div className="max-w-md w-full mt-10 bg-white rounded-lg shadow-lg">
        <div className="p-6">
            {/* Embedding YouTube Playlist Link */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bJbH2kUsano?si=pw_powFFE4qKLHQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    
        </div>
                    );
                    case 'Obesity (Class 1)':
                        return (
                            <div>
            <div className="max-w-md w-full mt-10 bg-white rounded-lg shadow-lg">
           
            <div className="p-6">
                {/* Embedding YouTube Playlist Link */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ymjNF6lPUaY?si=sARyufUxd9G11oOV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
            <div className="max-w-md w-full mt-10 bg-white rounded-lg shadow-lg">
           
            <div className="p-6">
                {/* Embedding YouTube Playlist Link */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/1UBuwKo3jvY?si=H4wMfwjOAaJu-dNg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
            <div className="max-w-md w-full mt-10 bg-white rounded-lg shadow-lg">
           
            <div className="p-6">
                {/* Embedding YouTube Playlist Link */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/AmdvMztw6KE?si=7DTYX9xfl9Mvvo1n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        
            </div>
                        );
                        case 'Severe Obesity':
                            return (
                                <div>
                <div className="max-w-md w-full mt-10 bg-white rounded-lg shadow-lg">
              
                <div className="p-6">
                    {/* Embedding YouTube Playlist Link */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/gC_L9qAHVJ8?si=VACgeT4pqjIqjwdX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
                <div className="max-w-md w-full mt-10 bg-white rounded-lg shadow-lg">
             
                <div className="p-6">
                    {/* Embedding YouTube Playlist Link */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/vPJKAG0mknI?si=RfDlgTzAAABMhRdd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
                <div className="max-w-md w-full mt-10 bg-white rounded-lg shadow-lg">
                
                <div className="p-6">
                    {/* Embedding YouTube Playlist Link */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/gNoSo4SQN2o?si=hvpTt7wjvEp2Bz8v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            
                </div>
                            );
            // Add cases for other BMI stages with their respective embedded YouTube links
            default:
                return null;
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-beige-100 to-beige-300">
        <div className="max-w-md w-full mt-10 bg-white rounded-lg shadow-lg">
            <div className="bg-gradient-to-r from-pink-200 to-pink-300 p-6 rounded-t-lg">
                <h2 className="text-3xl text-center font-bold text-gray-800 mb-4">BMI Result</h2>
            </div>
            <div className="p-6">
                {renderBmiResult()}
            </div>
        </div>

        <div className="max-w-md w-full mt-10 bg-white rounded-lg shadow-lg">
   
            <div className="p-6">
                {RenderVideoEmbed()}
            </div>
        </div>
    </div>
);
};



export default WorkoutVideo;