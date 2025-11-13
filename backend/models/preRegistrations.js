const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  hospital: {
    type: String,
    trim: true
  },
  specialization: {
    type: String,
    required: true,
    trim: true
  },
  experience: {
    type: String,
    required: true,
    trim: true
  },
  interests: [{
    type: String,
    trim: true
  }]
}, {
  timestamps: true
});

const Submission = mongoose.model('PreRegistrations', submissionSchema);

// Function to save registration
async function saveRegistration(data) {
  console.log('Saving registration:', data);
  try {
    const submission = new Submission(data);
    const saved = await submission.save();
    console.log('Saved submission:', saved._id);
    return { id: saved._id };
  } catch (err) {
    console.error('Error saving registration:', err);
    throw err;
  }
}

// Function to get all registrations
async function getAllRegistrations() {
  try {
    const submissions = await Submission.find().sort({ createdAt: -1 });
    console.log('Fetched submissions:', submissions.length);
    return submissions;
  } catch (err) {
    console.error('Error fetching registrations:', err);
    throw err;
  }
}

module.exports = {
  saveRegistration,
  getAllRegistrations
};