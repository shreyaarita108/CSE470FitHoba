const mongoose = require('mongoose');
const posts = require('../models/posts')


const getPosts = async (req, res) => {

    try {
        const postdata = await posts.find()

        res.status(200).json(postdata)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
const createPost = async (req, res) => {
    const {postTitle, postContent, username} = req.body
    console.log(req.body)

    // create token

    try {
        const user = await posts.creatingpost(postTitle, postContent, username)

        res.status(200).json({postTitle, postContent, username})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getPost = async (req, res) => {
  const { id } = req.params
  console.log(id)

  try {
      const postdata = await posts.findById(id);

      res.status(200).json(postdata)
  } catch (error) {
      res.status(400).json({error: error.message})
  }
}

const likePost = async (req, res) => {
    const { id } = req.params;
    const { username } = req.body;

    try {
        const post = await posts.findById(id);

        if (!post) {
            return res.status(404).json({ error: 'Post not found.' });
        }
        // Fetch the author's userId from the post object
        const authorUsername = post.name;

        // Check if the user is trying to like their own post
        if (authorUsername === username) {
            return res.status(400).json({ error: 'You cannot like your own post.' });
        }

        // Check if the user has already liked the post
        if (post.likedBy.includes(username)) {
            return res.status(400).json({ error: 'You have already liked this post.' });
        }

        post.likes += 1;
        post.likedBy.push(username);
        await post.save();


        res.status(200).json({ message: 'Post liked successfully.' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const addComment = async (req, res) => {
    const { id } = req.params;

    const { text, user } = req.body;
    try {
        const post = await posts.findById(id);
        if (!post) {
            return res.status(404).json({ error: 'Post not found.' });
        }
        post.comments.push({ text, user });
        await post.save();
        res.status(200).json({ message: 'Comment added successfully.' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getComments = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await posts.findById(id);
        if (!post) {
            return res.status(404).json({ error: 'Post not found.' });
        }
        const comments = post.comments;
        res.status(200).json(comments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getPosts, createPost, getPost, likePost, addComment, getComments };