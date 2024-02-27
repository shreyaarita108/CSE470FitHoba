import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Retrieve user data from localStorage
        const userData = localStorage.getItem('user');
        if (userData) {
            const user = JSON.parse(userData);
            setUserProfile(user);
            setLoading(false);
        } else {
            setLoading(false);
        }
    }, []);

    if (loading) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    if (!userProfile) {
        return <div className="flex items-center justify-center h-screen">User not found</div>;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-200 to-purple-200">
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg overflow-hidden shadow-lg">
                <h2 className="text-2xl font-semibold text-white bg-gray-800 p-4 text-center">User Profile</h2>
                <div className="p-6">
                    <p className="text-lg text-center text-gray-800"><strong>Name:</strong> {userProfile.name}</p>
                    <p className="text-lg text-center text-gray-800"><strong>Username:</strong> {userProfile.username}</p>
                    <p className="text-lg text-center text-gray-800"><strong>Date of Birth:</strong> {userProfile.dob}</p>
                    <p className="text-lg text-center text-gray-800"><strong>Height:</strong> {userProfile.height}</p>
                    <p className="text-lg text-center text-gray-800"><strong>Weight:</strong> {userProfile.weight}</p>
                </div>
            </div>
            {/* Style the Change Password link */}
            <Link
                to="/user/passwordchange"
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300"
            >
                Change Password
            </Link>
        </div>
    );
};

export default UserProfile;
