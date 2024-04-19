import React, { useState, useEffect } from 'react';
import OpenAI from "openai";
import axios from 'axios';

const llm = new OpenAI({apiKey: '27b95a3400e500cba3ab6afb030a0dae16b8d45fcb4626456aa5acc5b7901018', baseURL: 'https://api.together.xyz/v1', dangerouslyAllowBrowser: true });

const CalorieCounter = () => {
  const [foods, setFoods] = useState([]);
  const [plannedCalories, setPlannedCalories] = useState(2000);
  const [error, setError] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const handlePlannedCaloriesChange = (e) => {
    setPlannedCalories(e.target.value);
  };
  const getCalorieEstimation = async () => {
    try {
      setError('');
      setLoading(true);
  
      if (foods.length === 0) {
        setError('Please enter at least one food item.');
        setLoading(false);
        return;
      }
  
      const questionString = `
        I have the following food items at home:
        ${foods.map(food => `- ${food}`).join('\n')}
        Firstly provide an estimate of the total calorie intake and suggest breakfast, lunch, and dinner options incorporating
        the food I have at home for a total of ${plannedCalories} calories. Give the response in 4 paragraphs. One for how many
        calories in the food. and the rest 3 for breakfast,lunch and dinner.
      `;
  
      const response = await llm.chat.completions.create({
        model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
        messages: [{'role': 'user', 'content': questionString}]
      });
  
      if (!response || !response.choices || !response.choices[0].message || !response.choices[0].message.content) {
        setError('Error parsing response from the server.');
        setLoading(false);
        return;
      }
  
      const parsedResponse = parseResponse(response.choices[0].message.content);
      setSuggestions(parsedResponse);
      setLoading(false);
    } catch (error) {
      setError('Error fetching calorie estimation and suggestions.');
      console.error(error);
      setLoading(false);
    }
  };
  

  const parseResponse = (response) => {
    // Split response by newline characters
    const lines = response.split('\n');
  
    // Filter out empty lines
    const filteredLines = lines.filter(line => line.trim() !== '');
  
    // Extract first 3 non-empty lines as suggestions
    const suggestions = filteredLines.slice(0, 20);
  
    return suggestions;
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-beige-100 to-beige-300">
      <div className="max-w-4xl w-full mx-auto flex mt-20">
        {/* Form Section */}
        <div className="w-1/2 p-4">
          <textarea
            className="mb-2 p-2 border rounded-md w-full h-40 resize-none"
            value={foods}
            onChange={(e) => setFoods(e.target.value.split('\n'))}
            placeholder="Enter food items along with quantity/serving size"
            required
          />
          <input
            type="number"
            className="mb-2 p-2 border rounded-md w-full resize-none"
            value={plannedCalories}
            onChange={handlePlannedCaloriesChange}
            placeholder="Planned calorie intake for the day"
            required
          />
          <button
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
            onClick={getCalorieEstimation}
          >
            Get Calorie Estimation and Suggestions
          </button>
          {error && <p className="text-red-500">{error}</p>}
          {loading && <p className="text-green-500">GENARATING</p>}
        </div>
        {/* Output Section */}
        <div className="w-1/2 p-4">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="py-4 bg-lime-100 rounded-lg px-4 mb-4">
              <p className="mt-2">{suggestion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalorieCounter;
