import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        name: '',
        password: '',
        dob: '',
        weight: '',
        height: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/register', formData);
            console.log('User registered successfully:', response.data);
            // Clear the form after successful registration
            setFormData({
                username: '',
                email: '',
                name: '',
                password: '',
                dob: '',
                weight: '',
                height: ''
            });
        } catch (error) {
            console.error('Error registering user:', error.response.data);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-light" style={{ minHeight: '100vh' }}>
            <div className="container">
                <h2 className="text-center mb-4">User Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dob" className="form-label">Date of Birth</label>
                        <input type="date" className="form-control" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="weight" className="form-label">Weight</label>
                        <input type="number" className="form-control" id="weight" name="weight" value={formData.weight} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="height" className="form-label">Height</label>
                        <input type="number" className="form-control" id="height" name="height" value={formData.height} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;