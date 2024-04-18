import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DietCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [dietDates, setDietDates] = useState([]);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('User not authenticated');
    } else {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setUsername(decodedToken.username);
    }
  }, []);
  
  useEffect(() => {
    const fetchDietDates = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/diet/diet-dates/${username}`);
        console.log('Diet dates response:', response.data);
        const fetchedDietDates = response.data.dietDates;
        setDietDates(fetchedDietDates);
        localStorage.setItem(`dietDates_${username}`, JSON.stringify(fetchedDietDates)); // Store user-specific diet dates
      } catch (error) {
        console.error('Error fetching diet dates:', error);
      }
    };
  
    if (username) {
      const storedDietDates = JSON.parse(localStorage.getItem(`dietDates_${username}`)); // Retrieve user-specific diet dates
      if (storedDietDates && storedDietDates.length > 0) {
        setDietDates(storedDietDates);
      } else {
        // Fetch dietDates from the server if not found in local storage
        fetchDietDates();
      }
    }
  }, [username]); // Update when username changes
  
  console.log('Diet dates:', dietDates);
  

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const isDateDietMaintained = (date) => {
    if (!date) return false;
    const dateString = date instanceof Date ? date.toDateString() : date;
    return dietDates.includes(dateString);
  };

  const tileClassName = ({ date }) => {
    const dateString = date.toDateString();
    return isDateDietMaintained(dateString) ? 'diet-maintained' : '';
  };

  const addDietDate = async () => {
    if (selectedDate && !isDateDietMaintained(selectedDate.toDateString())) {
      try {
        console.log('Adding diet date:', selectedDate.toDateString());
        const response = await axios.post(`http://localhost:3001/diet/track/${username}`, {
          dates: [selectedDate.toDateString()],
        });
        console.log('Track diet response:', response.data);
        // Update local state immediately
        const updatedDates = [...dietDates, selectedDate.toDateString()];
        setDietDates(updatedDates);
        localStorage.setItem(`dietDates_${username}`, JSON.stringify(updatedDates)); // Save to user-specific local storage

        // Update the count of days maintained
        setMessage('Diet has been successfully maintained for this date!');
        setSelectedDate(null); // Clear selected date after adding
      } catch (error) {
        console.error('Error tracking diet:', error);
      }
    } else {
      // Show message to the user if diet has already been maintained for this date
      setMessage('Diet has already been maintained for this date!');
    }
  };

  const calculateDaysMaintained = () => {
    return dietDates.filter(date => isDateDietMaintained(date)).length;
  };

  const calculateDaysMaintainedThisMonth = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    return dietDates.filter(date => {
      const dateObj = new Date(date);
      return dateObj.getMonth() === currentMonth && dateObj.getFullYear() === currentYear;
    }).length;
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow flex">
        <div className="w-3/4">
          <h3 className="text-lg font-semibold mb-10">Diet Calendar</h3>
          <div className="mb-4">
            <button onClick={addDietDate} className="bg-green-500 text-white px-4 py-2 rounded">
              Mark Diet Maintained
            </button>
          </div>
          <Calendar
            onChange={handleDateClick}
            value={selectedDate}
            tileClassName={tileClassName}
          />
          {selectedDate && (
            <div className="mt-4">
              <p className="font-semibold">Selected Date:</p>
              <p>{selectedDate.toLocaleDateString()}</p>
            </div>
          )}
          {message && <p>{message}</p>}
          <style>
            {`
              .diet-maintained {
                background-color: rgba(144, 238, 144, 0.5) !important; /* Light green color */
              }
              .diet-added {
                background-color: blue !important;
              }
            `}
          </style>
          <div className="text-left mt-8">
            <div className="text-2xl font-bold text-green-900 mb-4">
              Diet Maintenance
            </div>
            <p>Diet maintained for {calculateDaysMaintained()} days</p>
            <p>Diet maintained for {calculateDaysMaintainedThisMonth()} days this month</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-auto py-4">
        <p></p>
      </div>
    </div>
  );
};

export default DietCalendar;