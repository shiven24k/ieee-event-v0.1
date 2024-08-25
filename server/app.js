const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Set up nodemailer transport
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // or use your email provider
    auth: {
      user: 'kashyapshiven2002@gmail.com',
      pass: '',
    },
  });

  // Mail format and content
  //if i change the email to my email then i will get the email
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

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});