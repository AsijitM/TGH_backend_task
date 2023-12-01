const Student = require('../../models/student.model');
const Task = require('../../models/task.model');

async function addStudent(req, res) {
  try {
    const { name, email, department, password } = req.body;

    // Check if the email is already in use
    const existingStudent = await Student.findOne({ email });

    if (existingStudent) {
      return res.status(409).json({
        message: 'Email already exists. Please use a different email.',
      });
    }

    const existingName = await Student.findOne({ name });

    if (existingName) {
      return res.status(409).json({
        message: 'Name already exists. Please use give a different name.',
      });
    }

    const student = new Student(req.body);
    await student.save();
    res.status(201).json({
      message: 'Student added successfully',
      name: student.name,
      email: student.email,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error adding student', error });
  }
}

async function assignTask(req, res) {
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
}

module.exports = {
  addStudent,
  assignTask,
};
