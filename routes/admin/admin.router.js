const express = require('express');
const Admin = require('../../models/admin.model');
const Student = require('../../models/student.model');
const Task = require('../../models/task.model');
const { addStudent, assignTask } = require('./admin.controller');

const adminRouter = express.Router();

adminRouter.get('/admin-panel', (req, res) => {
  return res.send('Welcome to Admin Panel');
});

// Endpoint for adding students by Admin
adminRouter.post('/add_student', addStudent);

// Endpoint for assigning tasks by Admin
adminRouter.post('/assign_task', assignTask);

module.exports = {
  adminRouter,
};
