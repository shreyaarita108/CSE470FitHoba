import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateProfile = () => {
    // State for error and username
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');

    // Fetch username  
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('User not authenticated');
        } else {
            const decodedToken = JSON.parse(atob(token.split('.')[1]));
            setUsername(decodedToken.username);
        }
    }, []); 

    
    const [formData, setFormData] = useState({
        height: '',
        weight: '',
        diseases: [], 
        medications: ''
    });

    //Fetch user profile data 
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    setError('User not authenticated');
                    return;
                }

                const username = JSON.parse(atob(token.split('.')[1])).username;

                const response = await axios.get(`http://localhost:3001/user/profile/${username}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const userProfileData = response.data;
                setFormData({
                    height: userProfileData.height,
                    weight: userProfileData.weight,
                    diseases: userProfileData.diseases,
                    medications: userProfileData.medications
                });
            } catch (error) {
                console.error('Error fetching user profile:', error);
                setError('Error fetching user profile');
            }
        };

        fetchUserProfile();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData(prevFormData => ({
                ...prevFormData,
                diseases: checked ? [...prevFormData.diseases, value] : prevFormData.diseases.filter(d => d !== value)
            }));
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Username:", username); 
            console.log("Form Data:", formData); 
            const response = await axios.post('http://localhost:3001/user/profile/update', {
                username,
                ...formData
            });
            console.log(response.data); 
            setTimeout(() => {
                window.location.href = `/userprofile/${username}`;
            }, 1000); 
        } catch (error) {
            console.error('Profile update failed:', error.response.data);
            setError('Profile update failed');
        }
    };

    return (
        <div className="max-w-md mx-auto bg-black shadow-md rounded px-8 py-10 mt-10 mb-15">
            <h2 className="text-2xl font-semibold mb-4 text-center text-white">Update Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="height" className="block text-white text-sm font-bold mb-2">Height (in cm)</label>
                    <input
                        type="number"
                        id="height"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        required
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="weight" className="block text-white text-sm font-bold mb-2">Weight (in kg)</label>
                    <input
                        type="number"
                        id="weight"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        required
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label className="block text-white text-sm font-bold mb-2">Diseases</label>
                    <div className="flex flex-wrap">
                        {["Diabetes", "Hypertension", "Obesity", "HeartDisease", "HighCholesterol", "DigestiveIssues","Allergies","Others.."].map((disease) => (
                            <label key={disease} className="inline-flex items-center mr-4">
                                <input
                                    type="checkbox"
                                    name="diseases"
                                    value={disease}
                                    checked={formData.diseases.includes(disease)}
                                    onChange={handleChange}
                                    className="form-checkbox h-5 w-5 text-blue-500"
                                />
                                <span className="ml-2 text-white">{disease}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div>
                    <label htmlFor="medications" className="block text-white text-sm font-bold mb-2">Medications</label>
                    <textarea
                        id="medications"
                        name="medications"
                        value={formData.medications}
                        onChange={handleChange}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="List your medications (if any)"
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Update Profile</button>
            </form>
            {error && <div className="mt-4 bg-red-100 text-red-700 px-4 py-2 rounded-md">{error}</div>}
        </div>
    );
};

export default UpdateProfile;


