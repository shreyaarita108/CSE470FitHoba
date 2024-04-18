import React, { useState, useEffect } from 'react';
import './CommentList.css';

const Comments = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [error, setError] = useState(null);

    const fetchComments = async () => { // Define fetchComments function
        try {
            const response = await fetch(`http://localhost:3001/post/${postId}/comments`);
            if (response.ok) {
                const data = await response.json();
                setComments(data);
            } else {
                console.error('Error fetching comments:', response.status);
            }
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    useEffect(() => {
        fetchComments(); // Call fetchComments on component mount
    }, [fetchComments]);

    const handleCommentSubmit = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('User not authenticated');
                return;
            }

            const username = JSON.parse(atob(token.split('.')[1])).username;

            const response = await fetch(`http://localhost:3001/post/${postId}/addcomments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({  user:username, text: newComment }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error);
            }

            // Clear the comment input after submitting
            setNewComment('');

            // Fetch updated comments
            fetchComments();
        } catch (error) {
            console.error('Error submitting comment:', error);
            setError(error.message);
        }
    };

    return (
        <div>
            <h3 className="text-lg font-semibold mb-2">Comments</h3>
            <ul className="comment-list">
        {comments.map((comment, index) => (
            <li key={index} className="comment">
                <p className="comment-text">{comment.text}</p>
                <p className="comment-user">-{comment.user}</p>
            </li>
        ))}
    </ul>
            <div className="mt-4">
                <textarea
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full border rounded py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                    onClick={handleCommentSubmit}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Post Comment
                </button>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};

export default Comments;