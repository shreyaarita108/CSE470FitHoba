import React, { useState, useEffect } from 'react';
import OpenAI from "openai";
import axios from 'axios';
// import { PromptTemplate } from 'langchain/prompts';
// import { ResponseSchema, StructuredOutputParser } from 'langchain/output_parsers';

const llm = new OpenAI({apiKey: '27b95a3400e500cba3ab6afb030a0dae16b8d45fcb4626456aa5acc5b7901018', baseURL: 'https://api.together.xyz/v1', dangerouslyAllowBrowser: true });

const WorkReco = () => {
  const [age, setAge] = useState('');
  const [requiredCalories, setRequiredCalories] = useState('');
  const [dietary, setDietary] = useState('');
  const [error, setError] = useState('');
  const [mealPlan, setMealPlan] = useState([]);
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [height,setHeight] = useState(0)
  const [weight,setWeight] = useState(0)
  const [bmi, setBmi] = useState(0)
  const [bmiDescription, setBmiDescription] = useState(0)


    // Fetch username  
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
    const fetchUserProfile = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('User not authenticated');
                return;
            }

            const username = JSON.parse(atob(token.split('.')[1])).username;

            const response = await axios.get(`http://localhost:3001/user/profile/${username}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const userProfileData = response.data;
            console.log(userProfileData)

            const dob = new Date(userProfileData.dob);

            // Get the current date
            const currentDate = new Date();

            // Calculate the difference between the current date and the DOB
            const ageDiffMilliseconds = currentDate - dob;

            // Convert milliseconds to years
            const ageDate = new Date(ageDiffMilliseconds);
            const age = Math.abs(ageDate.getUTCFullYear() - 1970);

            setAge(age)
            const calcbmi = userProfileData.weight/((userProfileData.height/100)**2)
            setBmi(calcbmi)
           

        } catch (error) {
            console.error('Error fetching user profile:', error);
            setError('Error fetching user profile');
        }
    };

    fetchUserProfile();
}, []);

  const getMealPlan = async () => {
    try {
        setMealPlan([]); // Clear previous meal plan
    setError(''); // Clear previous error
    setGenerated(false); // Set generated to false
    if (!requiredCalories) {
        // Display validation messages or prevent form submission
        // For example:
        setError('Please fill out all required fields.');
        return;
      }
        setLoading(true);
        console.log(age, bmi)
      const questionString = `
        I am ${age} years old and my goal is to burn ${requiredCalories} calories per day.
        My current BMI rate is ${bmi},
        Based on these details, here are some workout recommendations tailored to my needs:
        First tell me description of my BMI rate ,in which stage that I fall in. 
        Using these details answer the following question in 5 paragraphs (each with bullet points of the meals) with each paragraph starting with "#":
        keep the details as simple as possible and in less words.
        Day 1: What should be my workout plan and how to do recovery from the workout?
        Day 2: What should be my workout plan and how to do recovery from the workout?
        Day 3: What should be my workout plan and how to do recovery from the workout?
        Day 4: What should be my workout plan and how to do recovery from the workout?
        Day 5: What should be my workout plan and how to do recovery from the workout?
        Day 6: What should be my workout plan and how to do recovery from the workout?
        Day 7: What should be my workout plan and how to do recovery from the workout?
        Each of the questions for each of the day must refer to different  exercises that can be done at home.
        And give me the output in HTML table format only. Keep the BMI Section separated. And keep all the detailed description in the table only And make the html format elegant.use CSS.The Table should be in this format, Day , Workout Plan, Recovery. And At the bottom a box for BMI Stage.no need for paragraphic description in the beginning.
      `;
      const response = await llm.chat.completions.create({
        model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
        messages:[{'role':'user', 'content':questionString}]
      })
      console.log(response)
      const parsedResponse = response.choices[0].message.content
      setMealPlan(parsedResponse);
      setLoading(false);
      setGenerated(true);
      console.log(parsedResponse)
    } catch (error) {
      setError('Error fetching meal plan');
      console.error(error);
      setLoading(false);
    }
  };
  

  return (
<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-beige-100 to-beige-300">
  <div className="max-w-4xl w-full mx-auto mt-20">
    {/* Form Section */}
    <div className="p-4">
      <input
        className="mb-2 p-2 border rounded-md w-full"
        type="text"
        value={requiredCalories}
        onChange={(e) => setRequiredCalories(e.target.value)}
        placeholder="Calories To Burn"
        required
      />
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
        onClick={getMealPlan}
      >
        Generate Workout Plan
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {loading && <p className="text-green-500">GENERATING</p>}
    </div>
    {/* Output Section */}
    <div className="p-4">
    <div className="p-4">
        <div className="border border-gray-300 rounded-md p-4" dangerouslySetInnerHTML={{ __html: mealPlan }} />
      </div>
    </div>
  </div>
</div>



  );
};


export default WorkReco;
