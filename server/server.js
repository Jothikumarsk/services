const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const ContactForm = require('./models/contactform');
const cors= require('cors')

const app = express();


// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST Route to Handle Form Submission
app.post('/submit-form', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // Save form data to MongoDB
    const newSubmission = new ContactForm({
      name,
      email,
      phone,
      message,
    });
    await newSubmission.save();

    res.status(200).send({ success: true, message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).send({ success: false, message: 'Error submitting the form.' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
