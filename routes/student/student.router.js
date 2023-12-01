const express = require('express');
const Student = require('../../models/student.model');
const Task = require('../../models/task.model');
const mongoose = require('mongoose');
const { getTasks, updateTasks } = require('./student.controller');

const studentRouter = express.Router();

// Enddpoint to get all the tasks of the student
studentRouter.get('/:id', getTasks);

// Endpoint for updating task status by Student
studentRouter.put('/update_task_status', updateTasks);

module.exports = {
  studentRouter,
};
