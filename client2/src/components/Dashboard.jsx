import React, { useState, useEffect } from 'react';
import { useRef } from "react";
import { motion } from "framer-motion";

import { Link } from 'react-router-dom'; // Import Link
import DietCalendar from './DietCalendar';
import './Dashstyle.css';
import cvrImage from "./Assets/2.jpg"

const Dashboard = () => {

  const dashboardRef = useRef(null);

  const scrollToDashboard = () => {
    if (dashboardRef.current) {
      dashboardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-beige-100 to-beige-300">
    //   <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Hello, {userProfile.name}!</h2>
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //     <Link to="/mealplan" className="link-button">Meal Plan Generator</Link>
    //     <Link to="/diet-calendar" className="link-button">Diet Calendar</Link>
    //     <Link to="/workreco" className="link-button">Workout Recommendations</Link>
    //     <button className="action-button">Calorie Counter</button>
    //     <Link to="/showbmi" className="link-button">Show BMI</Link>
    //     <Link to="/notifications" className="link-button">Notifications</Link>
    //   </div>
    // </div> 
    <div className="flex flex-col font-[TimesNewRoman]  mt-20 mb-32 mb-[-4rem] ">
      {/* <div className="w-auto relative h-[100vh] bg-black  text-white"> */}

      <div className='flex flex-col '>
      <img
    src="https://t4.ftcdn.net/jpg/02/92/20/37/360_F_292203735_CSsyqyS6A4Z9Czd4Msf7qZEhoxjpzZl1.jpg"
    alt=".."
    className="abssolute inset-0 object-cover" 
  />
  <h1 className="absolute mt-[25rem] ml-[53rem] text-white text-7xl text-center font-semibold ">WELCOME!!</h1>
      <motion.button
        whileHover={{ scale: 1.1 }} // Scale to 1.1 on hover
        className="absolute mt-[35rem] ml-[60rem] "
      >
    <button
    onClick={scrollToDashboard} 
    className='bg-[#9cc034] px-10 py-5 rounded-xl text-4xl '>Explore</button>
    </motion.button>
    </div>

          {/* Background image with overlay */}
          {/* <div className="relative">

  <div className="flex flex-col gap-20 absolute inset-0 flex items-center justify-center">
    <p className="text-white text-7xl font-bold">Welcome</p>
    <motion.button
        whileHover={{ scale: 1.1 }} // Scale to 1.1 on hover
        className="relative"
      >
    <button
    onClick={scrollToDashboard}
    className='bg-red-500 px-10 py-5 rounded-xl text-4xl'>Explore</button>
    </motion.button>
  </div>
</div> */}
     


      <div

      id='dashboard'
      ref={dashboardRef}
      
      style={{

        background: "rgb(255,255,255)",
        background: "linear-gradient(270deg, rgba(255,255,255,1) 7%, rgba(156,192,48,1) 100%)"
      }}    
      className="flex flex-col items-center h-[100vh] pt-32 gap-16">
          <div className='flex flex-row gap-[20rem] mx-10'>
          <div className='rounded-xl'>

          <Link to="/mealplan">
      <motion.button
        whileHover={{ scale: 1.1 }} // Scale to 1.1 on hover
        className="relative"
      >
        <img
          className="w-[30rem] rounded-lg shadow-lg shadow-[#9cc034] h-[25rem]"
          src="https://as1.ftcdn.net/v2/jpg/02/91/26/36/1000_F_291263648_p6xUmn8znBXXiBDquzbAIiHsPk1rosnU.jpg"
          alt="planner"
        />
        <motion.div
          className="absolute inset-0 bg-black opacity-60 hover:opacity-70 flex items-center justify-center"
          whileHover={{ opacity: 0.5 }} // Opacity to 50% on hover
          whileTap={{ opacity: 0 }} // Hide text on tap
        >
          <p className="text-white text-4xl">Meal planner</p>
        </motion.div>
      </motion.button>
      </Link>
    </div>
    <div className='rounded-xl'>
    <Link to="/workreco">
      <motion.button
        whileHover={{ scale: 1.1 }} // Scale to 1.1 on hover
        className="relative"
      >
        <img
          className="w-[30rem] rounded-lg shadow-lg shadow-[#9cc034] h-[25rem]"
          src="https://as1.ftcdn.net/v2/jpg/02/91/26/36/1000_F_291263648_p6xUmn8znBXXiBDquzbAIiHsPk1rosnU.jpg"
          alt="planner"
        />
        <motion.div
          className="absolute inset-0 bg-black opacity-60 hover:opacity-70 flex items-center justify-center"
          whileHover={{ opacity: 0.5 }} // Opacity to 50% on hover
          whileTap={{ opacity: 0 }} // Hide text on tap
        >
          <p className="text-white text-4xl">Workout Recommendations</p>
        </motion.div>
      </motion.button>
      </Link>
    </div>
    <div className='rounded-xl'>
      <motion.button
        whileHover={{ scale: 1.1 }} // Scale to 1.1 on hover
        className="relative"
      >
        <img
          className="w-[30rem] rounded-lg shadow-lg shadow-[#9cc034] h-[25rem]"
          src="https://as1.ftcdn.net/v2/jpg/02/91/26/36/1000_F_291263648_p6xUmn8znBXXiBDquzbAIiHsPk1rosnU.jpg"
          alt="planner"
        />
        <motion.div
          className="absolute inset-0 bg-black opacity-60 hover:opacity-70 flex items-center justify-center"
          whileHover={{ opacity: 0.5 }}// Opacity to 50% on hover
          whileTap={{ opacity: 0 }} // Hide text on tap
        >
          <p className="text-white text-4xl">Calorie Counter</p>
        </motion.div>
      </motion.button>
    </div>

          </div>
          <div className='flex flex-row gap-[20rem] mx-10'>
          <div className='rounded-xl'>
          <Link to="/showbmi">
      <motion.button
        whileHover={{ scale: 1.1 }} // Scale to 1.1 on hover
        className="relative"
      >
        <img
          className="w-[30rem] rounded-lg shadow-lg shadow-[#9cc034] h-[25rem]"
          src="https://as1.ftcdn.net/v2/jpg/02/91/26/36/1000_F_291263648_p6xUmn8znBXXiBDquzbAIiHsPk1rosnU.jpg"
          alt="planner"
        />
        <motion.div
          className="absolute inset-0 bg-black opacity-60 hover:opacity-70 flex items-center justify-center"
          whileHover={{ opacity: 0.5 }} // Opacity to 50% on hover
          whileTap={{ opacity: 0 }} // Hide text on tap
        >
          <p className="text-white text-4xl">Show BMI</p>
        </motion.div>
      </motion.button>
      </Link>
    </div>
    <div className='rounded-xl'>
      <motion.button
        whileHover={{ scale: 1.1 }} // Scale to 1.1 on hover
        className="relative"
      >
        <img
          className="w-[30rem] rounded-lg shadow-lg shadow-[#9cc034] h-[25rem]"
          src="https://as1.ftcdn.net/v2/jpg/02/91/26/36/1000_F_291263648_p6xUmn8znBXXiBDquzbAIiHsPk1rosnU.jpg"
          alt="planner"
        />
        <motion.div
          className="absolute inset-0 bg-black opacity-60 hover:opacity-70 flex items-center justify-center"
          whileHover={{ opacity: 0.5 }} // Opacity to 50% on hover
          whileTap={{ opacity: 0 }} // Hide text on tap
        >
          <p className="text-white text-4xl">Notifications</p>
        </motion.div>
      </motion.button>
    </div>
    <div className='rounded-xl'>
    <Link to="/diet-calendar" >
      <motion.button
        whileHover={{ scale: 1.1 }} // Scale to 1.1 on hover
        className="relative"
      >
        <img
          className="w-[30rem] rounded-lg shadow-lg shadow-[#9cc034] h-[25rem]"
          src="https://as1.ftcdn.net/v2/jpg/02/91/26/36/1000_F_291263648_p6xUmn8znBXXiBDquzbAIiHsPk1rosnU.jpg"
          alt="planner"
        />
        <motion.div
          className="absolute inset-0 bg-black opacity-60 hover:opacity-70 flex items-center justify-center"
          whileHover={{ opacity: 0.5 }} // Opacity to 50% on hover
          whileTap={{ opacity: 0 }} // Hide text on tap
        >
          <p className="text-white text-4xl">Diet Calendar</p>
        </motion.div>
      </motion.button>
      </Link>
    </div>

          </div>

      </div>




    </div>
    // </div>
  );
  
};

export default Dashboard;
