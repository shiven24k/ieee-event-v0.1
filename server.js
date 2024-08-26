require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the React app uainf client app
app.use(express.static(path.join(__dirname, '/client/build')));

//render client path
// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});



app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Set up nodemailer transport
  
const transporter = nodemailer.createTransport({
  service: 'Gmail', // or use your email provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

  // Mail format and content
  const mailOptions = {
    from: email,
    to: 'kashyapshiven2002@gmail.com',
    subject: 'ICETIS 2025 Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error); // Log the error for debugging
      return res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
    res.status(200).json({ message: 'Email sent successfully!' });
  });
});


console.log(__dirname);
// Use the port provided by Render or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
console.log('Email User:', process.env.EMAIL_USER);
console.log('Email Pass:', process.env.EMAIL_PASS);