const express = require('express');
const mongoose = require('mongoose');
const { studentRouter } = require('./routes/student/student.router');
const { adminRouter } = require('./routes/admin/admin.router');
const Student = require('./models/student.model');
const { loginRouter } = require('./routes/auth/login');
const { connectDB } = require('./config/connectDB');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Connect to MongoDB

// Middleware to parse JSON in the request body
app.use(express.json());
app.use('/student', studentRouter);
app.use('/admin', adminRouter);
app.use('/login', loginRouter);

// Start the server

async function startServer() {
  await connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });
}

startServer();
