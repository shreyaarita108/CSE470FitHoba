import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from './Comments'; // Import Comments component

const Details = () => {
    const [post, setPost] = useState({});
    const [username, setUsername] = useState('');
    const [likes, setLikes] = useState(0); // State for storing the number of likes
    const [likeError, setLikeError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/post/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setPost(data);
                    setUsername(data.name);
                    setLikes(data.likes); // Set initial likes count
                } else {
                    console.error('Error fetching post:', response.status);
                }
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        fetchData();
    }, [id]);

    // Function to handle liking a post
    const likePost = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setLikeError('User not authenticated');
                return;
            }

            const username = JSON.parse(atob(token.split('.')[1])).username;

            const response = await fetch(`http://localhost:3001/post/${id}/like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username }), // Send username instead of userId
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error);
            }

            // Update the likes count
            setLikes(likes => likes + 1);

        } catch (error) {
            console.error('Error liking post:', error);
            setLikeError(error.message); // Set like error message
            // Clear the like error message after 3 seconds
            setTimeout(() => {
                setLikeError(null);
            }, 3000);
        }
    };

    return (
        <div className="flex min-h-screen mt-20 bg-gradient-to-r from-beige-100 to-beige-300">
            <div className="max-w-2xl w-full p-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="titleandcommentlogo">
                        <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
                    </div>
                    <p className="text-lg text-gray-800">{post.content}</p>
                    <p className="text-sm text-gray-600">Author: {username}</p>
                    <p className="text-sm text-gray-600">Likes: {likes}</p> {/* Display likes count */}
                    {/* Display like error message */}
                    {likeError && (
                        <p className="text-red-500">{likeError}</p>
                    )}
                    <button
                        className="text-sm bg-blue-500 text-white px-3 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                        onClick={likePost}
                    >
                        Like
                    </button>
                </div>
                {/* Display Comments component */}
                <Comments postId={id} />
            </div>
        </div>
    );
};

export default Details;