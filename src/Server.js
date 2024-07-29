const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/send-email', async (req, res) => {
  const { name, email, message, to } = req.body;

  try {
    // Create a transporter using your email service provider's settings
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Set up the email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'An error occurred while sending the email' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});