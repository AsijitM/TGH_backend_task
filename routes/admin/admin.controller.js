const Student = require("../../models/student.model");
const Task = require("../../models/task.model");

async function addStudent(req, res) {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({ message: 'Student added successfully' });
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
