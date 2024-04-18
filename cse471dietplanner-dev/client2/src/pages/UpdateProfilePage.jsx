// pages/UpdateProfilePage.jsx

import React from 'react';
import UpdateProfile from '../components/UpdateProfile';

const UpdateProfilePage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-4">
                <UpdateProfile />
            </div>
        </div>
    );
};

export default UpdateProfilePage;
