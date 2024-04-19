// UserPasswordChange.jsx
import React, { useState } from 'react';
import axios from 'axios';

const UserPasswordChange = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token')); // Check if token exists
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Fetch username from localStorage token
    const token = localStorage.getItem('token');
    if (!token) {
      setError('User not authenticated');
      return;
    }
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const username = decodedToken.username;
    console.log(username)

    // Check if newPassword and confirmNewPassword match
    if (newPassword !== confirmNewPassword) {
      setError('New passwords do not match');
      return;
    }

    try {
      // Send request to backend to change password
      const response = await axios.post('http://localhost:3001/user/password/change', {
        username,
        oldPassword,
        newPassword
      });
      
      // Handle success response
      setSuccessMessage(response.data.message);
      setError('');
      
      // Clear form fields
      setOldPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
 // Redirect to user profile after 1 second
 setTimeout(() => {
    window.location.href = '/userprofile/:username';
  }, 500);
} catch (error) {
  // Handle error response
  setError(error.response.data.message || 'An error occurred');
  setSuccessMessage('');
}
};

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-red-600 font-bold">Please log in first to change your password.</p>
      </div>
    );
  }


  return (
    <div className="flex justify-center items-center h-screen">
  <div className="max-w-md mx-auto bg-black shadow-md rounded px-8 py-10 mt-10 mb-15">
    <div className="p-8">
    <h2 className="text-2xl font-semibold mb-4 text-center text-white">Change Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="oldPassword" className="block text-white text-sm font-bold mb-2">Old Password</label>
          <input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="newPassword" className="block text-white text-sm font-bold mb-2">New Password</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="confirmNewPassword" className="block text-white text-sm font-bold mb-2">Confirm New Password</label>
          <input
            type="password"
            id="confirmNewPassword"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Change Password</button>
      </form>
      {successMessage && <div className="mt-4 bg-green-100 text-green-700 px-4 py-2 rounded-md">{successMessage}</div>}
      {error && <div className="mt-4 bg-red-100 text-red-700 px-4 py-2 rounded-md">{error}</div>}
    </div>
  </div>
  </div>


  );
};
export default UserPasswordChange;