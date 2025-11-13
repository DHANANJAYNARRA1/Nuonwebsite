require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const { saveRegistration, getAllRegistrations } = require('./models/preRegistrations');
const { saveNurseApplication, getAllNurseApplications } = require('./models/nurseApplications');
const { sendUserConfirmationEmail, sendAdminNotificationEmail, sendNurseConfirmationEmail, sendNurseAdminNotificationEmail } = require('./services/emailService');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const app = express();
const PORT = 5000;
console.log('Using PORT:', PORT);

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.post('/api/register', async (req, res) => {
  const { fullName, phoneNumber, email, hospital, specialization, experience, interests } = req.body;

  // Basic validation
  if (!fullName || !phoneNumber || !email || !specialization || !experience) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Email validation
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Phone validation (10 digits)
  if (!/^[0-9]{10}$/.test(phoneNumber)) {
    return res.status(400).json({ error: 'Invalid phone number' });
  }

  try {
    console.log('Saving to database...');
    // Save to database
    const result = await saveRegistration(req.body);
    console.log('Saved successfully, ID:', result.id);

    // Send confirmation email to user
    try {
      await sendUserConfirmationEmail(email, fullName, req.body);
      console.log('User email sent');
    } catch (emailErr) {
      console.error('Failed to send user email:', emailErr);
    }

    // Send notification email to admin
    try {
      await sendAdminNotificationEmail(req.body);
      console.log('Admin email sent');
    } catch (emailErr) {
      console.error('Failed to send admin email:', emailErr);
    }

    res.status(201).json({
      message: 'Registration successful',
      id: result.id
    });
  } catch (err) {
    console.error('Database save error:', err);
    return res.status(500).json({ error: 'Failed to save registration' });
  }
});

app.get('/api/registrations', async (req, res) => {
  try {
    const registrations = await getAllRegistrations();
    res.json(registrations);
  } catch (err) {
    console.error('Database error:', err);
    return res.status(500).json({ error: 'Failed to fetch registrations' });
  }
});

const axios = require('axios');

// API Routes for Nurse Applications
app.post('/api/nurse/apply', async (req, res) => {
  const { name, mobile, email, specialization, hospital, experience, applied_for } = req.body;

  // Basic validation
  if (!name || !mobile || !email || !specialization || experience === undefined) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Email validation
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Mobile validation (10 digits)
  if (!/^[0-9]{10}$/.test(mobile)) {
    return res.status(400).json({ error: 'Invalid mobile number' });
  }

  try {
    console.log('Saving nurse application to database...');
    // Save to database
    const result = await saveNurseApplication(req.body);
    console.log('Saved successfully, ID:', result.id);

    // Call external API to send emails (as per senior's code)
    try {
      const data = JSON.stringify({
        "name": name,
        "mobile": mobile,
        "email": email,
        "specilization": specialization, // Note: keeping the typo as in original code
        "hospital": hospital,
        "experience": experience,
        "applied_for": applied_for
      });

      const config = {
        method: 'post',
        url: 'https://api.nuonhub.com/nurse/apply',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      const response = await axios(config);
      console.log('External API response:', JSON.stringify(response.data));
    } catch (apiErr) {
      console.error('Failed to call external API:', apiErr);
    }

    res.status(201).json({
      message: 'Nurse application submitted successfully',
      id: result.id
    });
  } catch (err) {
    console.error('Database save error:', err);
    return res.status(500).json({ error: 'Failed to save nurse application' });
  }
});

app.get('/api/nurse/applications', async (req, res) => {
  try {
    const applications = await getAllNurseApplications();
    res.json(applications);
  } catch (err) {
    console.error('Database error:', err);
    return res.status(500).json({ error: 'Failed to fetch nurse applications' });
  }
});

// Serve static files from build
app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err);
    } else {
      console.log('Database connection closed.');
    }
    process.exit(0);
  });
});