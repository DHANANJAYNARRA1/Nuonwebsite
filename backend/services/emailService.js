const nodemailer = require('nodemailer');

// Email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send confirmation email to user
async function sendUserConfirmationEmail(email, fullName, data) {
  const { phoneNumber, hospital, specialization, experience, interests } = data;
  const interestsStr = Array.isArray(interests) ? interests.join(', ') : interests || '';

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Welcome to NUON - Registration Confirmed!',
    html: `
      <h1>Thank you for registering, ${fullName}!</h1>
      <p>Your registration for NUON has been confirmed.</p>
      <p>Details:</p>
      <ul>
        <li>Name: ${fullName}</li>
        <li>Phone: +91 ${phoneNumber}</li>
        <li>Email: ${email}</li>
        <li>Hospital: ${hospital || 'Not specified'}</li>
        <li>Specialization: ${specialization}</li>
        <li>Experience: ${experience}</li>
        <li>Interests: ${interestsStr}</li>
      </ul>
      <p>We'll be in touch soon with more information!</p>
    `,
  });
}

// Function to send notification email to admin
async function sendAdminNotificationEmail(data) {
  const { fullName, phoneNumber, email, hospital, specialization, experience, interests } = data;
  const interestsStr = Array.isArray(interests) ? interests.join(', ') : interests || '';

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: 'New NUON Registration',
    html: `
      <h1>New Registration Received</h1>
      <p>A new user has registered for NUON:</p>
      <ul>
        <li>Name: ${fullName}</li>
        <li>Phone: +91 ${phoneNumber}</li>
        <li>Email: ${email}</li>
        <li>Hospital: ${hospital || 'Not specified'}</li>
        <li>Specialization: ${specialization}</li>
        <li>Experience: ${experience}</li>
        <li>Interests: ${interestsStr}</li>
      </ul>
    `,
  });
}

// Function to send confirmation email to nurse applicant
async function sendNurseConfirmationEmail(email, name, data) {
  const { mobile, hospital, specialization, experience, applied_for } = data;
  const appliedForStr = Array.isArray(applied_for) ? applied_for.join(', ') : applied_for || '';

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Nurse Application Received - NUON',
    html: `
      <h1>Thank you for applying, ${name}!</h1>
      <p>Your nurse application has been received.</p>
      <p>Details:</p>
      <ul>
        <li>Name: ${name}</li>
        <li>Mobile: ${mobile}</li>
        <li>Email: ${email}</li>
        <li>Hospital: ${hospital || 'Not specified'}</li>
        <li>Specialization: ${specialization}</li>
        <li>Experience: ${experience} years</li>
        <li>Applied For: ${appliedForStr}</li>
      </ul>
      <p>We'll review your application and get back to you soon!</p>
    `,
  });
}

// Function to send notification email to admin for nurse application
async function sendNurseAdminNotificationEmail(data) {
  const { name, mobile, email, hospital, specialization, experience, applied_for } = data;
  const appliedForStr = Array.isArray(applied_for) ? applied_for.join(', ') : applied_for || '';

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: 'New Nurse Application Received',
    html: `
      <h1>New Nurse Application Received</h1>
      <p>A new nurse has applied:</p>
      <ul>
        <li>Name: ${name}</li>
        <li>Mobile: ${mobile}</li>
        <li>Email: ${email}</li>
        <li>Hospital: ${hospital || 'Not specified'}</li>
        <li>Specialization: ${specialization}</li>
        <li>Experience: ${experience} years</li>
        <li>Applied For: ${appliedForStr}</li>
      </ul>
    `,
  });
}

module.exports = {
  sendUserConfirmationEmail,
  sendAdminNotificationEmail,
  sendNurseConfirmationEmail,
  sendNurseAdminNotificationEmail
};