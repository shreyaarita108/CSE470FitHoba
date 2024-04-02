import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import DietCalendar from './DietCalendar';
import './Dashstyle.css';


const Dashboard = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-beige-100 to-beige-300">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Hello, {userProfile.name}!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/mealplan" className="link-button">Meal Plan Generator</Link>
        <Link to="/diet-calendar" className="link-button">Diet Calendar</Link>
        <Link to="/workreco" className="link-button">Workout Recommendations</Link>
        <button className="action-button">Calorie Counter</button>
        <Link to="/showbmi" className="link-button">Show BMI</Link>
        <Link to="/notifications" className="link-button">Notifications</Link>
      </div>
    </div>
  );
  
};

export default Dashboard;
