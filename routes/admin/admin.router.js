const express = require('express');
const Admin = require('../../models/admin.model');
const Student = require('../../models/student.model');
const Task = require('../../models/task.model');

const adminRouter = express.Router();

adminRouter.get('/admin-panel', (req, res) => {
  return res.send('Welcome to Admin Panel');
});

// Endpoint for adding students by Admin
adminRouter.post('/add_student', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({ message: 'Student added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding student', error });
  }
});

// Endpoint for assigning tasks by Admin
adminRouter.post('/assign_task', async (req, res) => {
  try {
    const { taskName, dueTime, assignedTo } = req.body;

    // Check if the assignedTo email corresponds to an existing student
    const student = await Student.findOne({ email: assignedTo });
    if (!student) {
      return res.status(400).json({ message: 'Invalid student email' });
    }

    const task = new Task({
      taskName,
      dueTime,
      assignedTo: student._id,
    });

    await task.save();
    res.status(201).json({ message: 'Task assigned successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error assigning task', error });
  }
});

module.exports = {
  adminRouter,
};
