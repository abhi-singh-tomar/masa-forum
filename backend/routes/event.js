const express = require('express');
const router = express.Router();
const EventRegistration = require('../models/EventRegistration');

router.post('/register', async (req, res) => {
  try {
    const { fullName, email, phone, membershipStatus } = req.body;

    if (!fullName || !email || !phone || !membershipStatus) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const registration = await EventRegistration.create({
      fullName,
      email,
      phone,
      membershipStatus
    });

    res.status(201).json({ message: 'Successfully registered for the event!', registration });
  } catch (err) {
    console.error('Event registration error:', err.message);
    res.status(500).json({ message: 'Something went wrong', error: err.message });
  }
});

module.exports = router;