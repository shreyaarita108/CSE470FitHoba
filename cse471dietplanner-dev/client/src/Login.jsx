import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login', formData);
            console.log('User logged in successfully:', response.data);
            // Clear the form after successful login
            setFormData({
                email: '',
                password: ''
            });
            setError('');
            // Redirect user to dashboard or other page
        } catch (error) {
            console.error('Error logging in:', error.response.data);
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit">Login</button>
                {error && <div className="text-danger mt-2">{error}</div>}
            </form>
        </div>
    );
}

export default Login;
