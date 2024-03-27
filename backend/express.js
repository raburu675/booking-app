const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const cors = require('cors');

// Start an instance of the express server
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

// Create a transporter method containing the authentication settings
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  },
});

// Create a route to handle the request and send the response
app.post('/booking-details', async (req, res) => {
  try {
    // Extract data from the request body
    const { name, phoneNumber, email, guests } = req.body;

    // Create a mail options object
    const mailOptions = {
      from: email,
      to: 'donraburu675@gmail.com',
      subject: 'RESERVATION',
      text: `
        Name: ${name}\n
        PhoneNumber: ${phoneNumber}\n
        Email: ${email}\n        
        Guests: ${guests}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    
    // Send a success response
    res.status(200).send('Email sent successfully');
  } catch (error) {
    // Log the error for debugging
    console.error('Error sending email:', error);

    // Send an appropriate error response
    res.status(500).send('An error occurred while processing your request');
  }
});

// Listen on localhost:5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
