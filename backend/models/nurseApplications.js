const mongoose = require('mongoose');

const nurseApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  mobile: {
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
  specialization: {
    type: String,
    required: true,
    trim: true
  },
  hospital: {
    type: String,
    trim: true
  },
  experience: {
    type: Number,
    required: true
  },
  applied_for: [{
    type: String,
    trim: true
  }]
}, {
  timestamps: true
});

const NurseApplication = mongoose.model('NurseApplications', nurseApplicationSchema);

// Function to save nurse application
async function saveNurseApplication(data) {
  console.log('Saving nurse application:', data);
  try {
    const application = new NurseApplication(data);
    const saved = await application.save();
    console.log('Saved nurse application:', saved._id);
    return { id: saved._id };
  } catch (err) {
    console.error('Error saving nurse application:', err);
    throw err;
  }
}

// Function to get all nurse applications
async function getAllNurseApplications() {
  try {
    const applications = await NurseApplication.find().sort({ createdAt: -1 });
    console.log('Fetched nurse applications:', applications.length);
    return applications;
  } catch (err) {
    console.error('Error fetching nurse applications:', err);
    throw err;
  }
}

module.exports = {
  saveNurseApplication,
  getAllNurseApplications
};