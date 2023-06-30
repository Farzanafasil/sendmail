// Import the nodemailer module
const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'farzanaycet2009@gmail.com',
    pass: 'melxrckdpkxowzrq'
  }
});

// Define the email options
const mailOptions = {
  from: 'farzanaycet2009@gmail.com',
  to: 'farzanafasil@gmail.com',
  subject: 'Hello from Nodemailer',
  text: 'This is a test email sent using Nodemailer!'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error);
  } else {
    console.log('Email sent successfully using gmail!');
  }
});