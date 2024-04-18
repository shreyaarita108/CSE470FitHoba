// routes/notifications.js
const express = require('express');
const router = express.Router();
const NotificationController = require('../controller/notificationController'); // Corrected path

router.get('/', NotificationController.getNotifications);
router.put('/:id', NotificationController.markAsRead);

module.exports = router;

