import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import banner from "./Assets/1.jpg"
import bgImage from "./Assets/2.jpg"

const UserProfile = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Function to fetch user profile data
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    setError('User not authenticated');
                    setLoading(false);
                    return;
                }

                const username = JSON.parse(atob(token.split('.')[1])).username;

                const response = await axios.get(`http://localhost:3001/user/profile/${username}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setUserProfile(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user profile:', error);
                setError('Error fetching user profile');
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    if (loading) {
        return <div className="flex items-center justify-center ">Loading...</div>;
    }

    if (error) {
        return <div className="flex items-center justify-center ">{error}</div>;
    }

    if (!userProfile) {
        return <div className="flex items-center justify-center">User not found</div>;
    }

    return (
    //     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-beige-100 to-beige-300">
    //     <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-4 bg-white rounded-lg overflow-hidden shadow-lg mb-8">
    //         <div className="bg-green-500 text-white px-8 py-5 rounded-t-lg">
    //             <h2 className="text-4xl font-semibold text-center">User Profile</h2>
    //         </div>
    //         <div className="p-6">
    //             <div className="flex flex-col mb-4">
    //                 <label className="text-lg text-gray-800 mb-1">Name:</label>
    //                 <p className="text-lg text-center">{userProfile.name}</p>
    //             </div>
    //             <div className="flex flex-col mb-4">
    //                 <label className="text-lg text-gray-800 mb-1">Username:</label>
    //                 <p className="text-lg text-center">{userProfile.username}</p>
    //             </div>
    //             <div className="flex flex-col mb-4">
    //                 <label className="text-lg text-gray-800 mb-1">Date of Birth:</label>
    //                 <p className="text-lg text-center">{userProfile.dob}</p>
    //             </div>
    //             <div className="flex flex-col mb-4">
    //                 <label className="text-lg text-gray-800 mb-1">Height:</label>
    //                 <p className="text-lg text-center">{userProfile.height}</p>
    //             </div>
    //             <div className="flex flex-col mb-4">
    //                 <label className="text-lg text-gray-800 mb-1">Weight:</label>
    //                 <p className="text-lg text-center">{userProfile.weight}</p>
    //             </div>
    //             <div className="flex flex-col mb-4">
    //                 <label className="text-lg text-gray-800 mb-1">Diseases:</label>
    //                 <p className="text-lg text-center">{userProfile.diseases.join(', ')}</p>
    //             </div>
    //             <div className="flex flex-col mb-4">
    //                 <label className="text-lg text-gray-800 mb-1">Medications:</label>
    //                 <p className="text-lg text-center">{userProfile.medications}</p>
    //             </div>
    //         </div>
    //         <div className="bg-green-500 text-white px-10 py-4 rounded-b-lg">
    //             <Link
    //                 to="/user/updateprofile"
    //                 className="block w-full text-center font-bold text-3xl hover:bg-green-600 focus:outline-none focus:bg-green-600 transition duration-300 py-5"
    //             >
    //                 Update Profile
    //             </Link>
    //             {/* Style the Change Password link */}
    //             <Link
    //                 to="/user/passwordchange"
    //                 className="block w-full text-center font-bold text-3xl hover:bg-green-600 focus:outline-none focus:bg-green-600 transition duration-300 py-5"
    //             >
    //                 Change Password
    //             </Link>
    //         </div>
    //     </div>
    // </div>

    <>
     
    <div className='flex flex-col items-center  my-[10rem] rounded-[2rem] '>
        <div className='h-[60rem] w-auto bg-[#9cc034] flex flex-col items-center gap-2 text-white rounded-[2rem]'>
            <div>
                <img className=' w-[50rem]' src={bgImage} alt='image'/>
            </div>
            <div className='flex flex-row gap-32'>
           <Link
            to="/user/updateprofile"
                 className="bg-gray-800 rounded-lg flex justify-center items-center py-1 px-6 mt-2"
            >
                    Update Profile
                </Link>
                
                <img className='h-[10rem] w-[10rem] rounded-full mt-[-5rem] border-4 border-gray-800' src='https://img.freepik.com/premium-photo/anime-male-avatar_950633-914.jpg' alt='mamun'/>

                <Link
            to="/user/passwordchange"
            className="bg-[#df813c] rounded-lg flex justify-center items-center py-1 px-6 mt-2"
            >
                    Change Password
                </Link>
            </div>
            <div className='flex flex-row justify-center gap-10 text-3xl ml-[-18px] mt-10 text-black'>
                <h1><span className='font-semibold'>Name: </span>               

                    {userProfile.name}
           
              </h1>
              <h1><span className='font-semibold'>Username:</span>               

                    {userProfile.username}
              
              </h1>
            </div>
            <div className='flex flex-row justify-center gap-10 text-3xl ml-[-18px] mt-10 text-black'>
                <h1><span className='font-semibold'>Date of Birth:   </span>            
    
                    {userProfile.dob}
               
              </h1>
              <h1><span className='font-semibold'>Height:</span>           

                    {userProfile.height} {"cm"}
                
              </h1>
            </div>
            <div className='flex flex-col justify-center gap-5 text-3xl ml-[-18px] mt-10 text-black'>
                <h1><span className='font-semibold'>Weight: </span>             
         
                    {userProfile.weight} {"kg"}
                 
              </h1>
              <h1><span className='font-semibold'>Diseases:   </span>            
           
                    {userProfile.diseases.join(', \n')} 
                
              </h1>
              <h1><span className='font-semibold'>Medications:   </span>           
    
                    {userProfile.medications}
            
              </h1>
            </div>

        </div>

    </div>
    
    </>
    
    );    
};

export default UserProfile;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import UpdateProfile from './UpdateProfile'; // Add this import
// const UserProfile = () => {
//     const [userProfile, setUserProfile] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Retrieve user data from localStorage
//         const userData = localStorage.getItem('user');
//         if (userData) {
//             const user = JSON.parse(userData);
//             setUserProfile(user);
//             setLoading(false);
//         } else {
//             setLoading(false);
//         }
//     }, []);

//     if (loading) {
//         return <div className="flex items-center justify-center h-screen">Loading...</div>;
//     }

//     if (!userProfile) {
//         return <div className="flex items-center justify-center h-screen">User not found</div>;
//     }

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-200 to-purple-200">
//             <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg overflow-hidden shadow-lg mb-8">
//                 <h2 className="text-2xl font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-400 p-4 text-center">User Profile</h2>
//                 <div className="p-6">
//                     <p className="text-lg text-center text-white"><strong>Name:</strong> {userProfile.name}</p>
//                     <p className="text-lg text-center text-white"><strong>Username:</strong> {userProfile.username}</p>
//                     <p className="text-lg text-center text-white"><strong>Date of Birth:</strong> {userProfile.dob}</p>
//                     <p className="text-lg text-center text-white"><strong>Height:</strong> {userProfile.height}</p>
//                     <p className="text-lg text-center text-white"><strong>Weight:</strong> {userProfile.weight}</p>
//                 </div>
//                 <Link
//                     to="/user/updateprofile"
//                     className="block w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-b-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 text-center"
//                 >
//                     Update Profile
//                 </Link>
//                 {/* Style the Change Password link */}
//                 <Link
//                     to="/user/passwordchange"
//                     className="block w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-b-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 text-center"
//                 >
//                     Change Password
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default UserProfile; <div className="w-full md:w-1/2 lg:w-1/3 mx-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg overflow-hidden shadow-lg mb-1">
                //     <h2 className="text-2xl font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-400 p-4 text-center">Additional Box</h2>
                //     <div className="p-5">
                //         {/* Content of the additional box */}
                //     </div>
                // </div>