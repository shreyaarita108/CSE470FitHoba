import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    dob: '',
    height: '',
    weight: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if there is a token in localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/user/register', formData);
      setMessage('Registration Successful');
      setTimeout(() => {
        setMessage('');
        window.location.href = '/login';
      }, 1000);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('Registration Failed');
      }
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-beige-100 to-beige-300">
      <div className="max-w-2xl w-full bg-gray-100 shadow-lg rounded-lg overflow-hidden mt-20">
      {isLoggedIn && (
          <div className="text-center">
            <p className="text-2xl font-semibold mb-6 text-center text-gray-800 px-6 pt-6">Please log out before registering another account</p>
          </div>
        )}
        {!isLoggedIn && (
          <>
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800 px-6 pt-6">User Registration</h2>
        
        {error && <p className="text-red-500 text-sm mb-4 px-6">{error}</p>}
        {message && <p className="text-green-500 text-sm mb-4 px-6">{message}</p>}
        <form onSubmit={handleSubmit} className="px-6 pb-6">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input w-full" required />
          </div>
          <div className="mb-6">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="form-input w-full" required />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input w-full" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="form-input w-full" required />
          </div>
          <div className="mb-6">
            <label htmlFor="dob" className="block text-gray-700 text-sm font-bold mb-2">Date of Birth:</label>
            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className="form-input w-full" required />
          </div>
          <div className="mb-6">
            <label htmlFor="height" className="block text-gray-700 text-sm font-bold mb-2">Height(cm)</label>
            <input type="number" id="height" name="height" value={formData.height} onChange={handleChange} className="form-input w-full" required />
          </div>
          <div className="mb-6">
            <label htmlFor="weight" className="block text-gray-700 text-sm font-bold mb-2">Weight(kg):</label>
            <input type="number" id="weight" name="weight" value={formData.weight} onChange={handleChange} className="form-input w-full" required />
          </div>
          <button type="submit" className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-black font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 w-full">Register</button>
        </form>
        </>
        )}
      </div>
    </div>
  );
  
  
  
  
  
};

export default Register;