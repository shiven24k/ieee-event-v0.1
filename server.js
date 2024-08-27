require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the React app using client app
app.use(express.static(path.join(__dirname, '/client/build')));

// Render client path
// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.post('/api/send-email', (req, res) => {
  const { name, email,phone, message  } = req.body;

  // Set up nodemailer transport
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // or use your email provider
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Mail format and content for the admin
  const adminMailOptions = {
    from: email,
    to: 'kashyapshiven2002@gmail.com',
    subject: 'ICETIS 2025 Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nContact: ${phone}\nMessage: ${message}`,
  };

  // Mail format and content for the user
  const userMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thank you for contacting ICETIS 2025',
    text: `Dear ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest regards,\nICETIS 2025 Team`,
  };

  // Send email to admin
  transporter.sendMail(adminMailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email to admin:', error); // Log the error for debugging
      return res.status(500).json({ error: 'Failed to send email to admin', details: error.message });
    }

    // Send congratulatory email to user
    transporter.sendMail(userMailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email to user:', error); // Log the error for debugging
        return res.status(500).json({ error: 'Failed to send email to user', details: error.message });
      }

      res.status(200).json({ message: 'Emails sent successfully!' });
    });
  });
});

console.log(__dirname);
// Use the port provided by Render or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});