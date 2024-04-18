const Notification = require('../models/notification');

exports.getNotifications = async (req, res) => {
    try {
      // Fetch notifications from the database
      const notificationsFromDB = await Notification.find().sort('-createdAt');
  
      // Notification to always include
      const stayHealthyNotification = {
        message: 'Stay healthy!',
        type: 'general',
        read: false
      };
  
      // Combine the notifications
      const notifications = [stayHealthyNotification, ...notificationsFromDB];
  
      res.status(200).json({ notifications });
    } catch (error) {
      console.error('Error fetching notifications:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

exports.markAsRead = async (req, res) => {
  try {
    const notificationId = req.params.id;
    const notification = await Notification.findById(notificationId);
    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    notification.read = true;
    await notification.save();
    res.status(200).json({ message: 'Notification marked as read' });
  } catch (error) {
    console.error('Error marking notification as read:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.generateNotifications = async (req, res, next) => {
  try {
    // Example logic to generate notifications
    const userId = req.user.id; // Assuming you have middleware to extract user from request
    const stayHealthyNotification = new Notification({
        message: 'Stay healthy!',
        type: 'general',
        read: false,
      });
      await stayHealthyNotification.save();
    const waterNotification = new Notification({
      message: 'Remember to drink water!',
      type: 'water',
      read: false,
      user: userId // Associate notification with user
    });
    await waterNotification.save();

    const dietNotification = new Notification({
      message: 'Maintain your diet today!',
      type: 'diet',
      read: false,
      user: userId // Associate notification with user
    });
    await dietNotification.save();

    const workoutNotification = new Notification({
      message: 'It\'s time for a workout!',
      type: 'workout',
      read: false,
      user: userId // Associate notification with user
    });
    await workoutNotification.save();

    next(); // Call next middleware
  } catch (error) {
    console.error('Error generating notifications:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
