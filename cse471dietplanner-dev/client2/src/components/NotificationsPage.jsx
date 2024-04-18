import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchNotifications();
  }, []);

  useEffect(() => {
    console.log("Notifications:", notifications);
  }, [notifications]);

  const fetchNotifications = async () => {
    try {
      // Simulating data fetching
      const dummyData = [{ message: 'Notification 1' }, { message: 'Notification 2' }];
      setNotifications(dummyData);
    } catch (error) {
      console.error('Error fetching notifications:', error);
      setError('Error fetching notifications');
    }
  };
  

  return (
    <div>
      <h1>Notifications</h1>
      {error && <p>{error}</p>}
      {notifications.length === 0 && <p>No notifications</p>}
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPage;
