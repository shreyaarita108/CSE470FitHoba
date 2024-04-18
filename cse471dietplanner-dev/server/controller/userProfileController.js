const User = require("../models/user");

exports.getUserProfile = async (req, res) => {
    const { username } = req.params;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        // Exclude sensitive data like password before sending the response
        const userProfile = {
            name: user.name,
            username: user.username,
            email: user.email,
            dob: user.dob,
            height: user.height,
            weight: user.weight,
            diseases: user.diseases,
            medications: user.medications
        };
        res.json(userProfile);
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
