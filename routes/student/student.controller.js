const Student = require("../../models/student.model");
const Task = require("../../models/task.model");

async function getTasks(req, res) {
  try {
    const studentId = req.params.id;
    // console.log('stundet', studentId);
    // Find the student by _id
    const student = await Student.findById(studentId);
    // console.log(student);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Find tasks assigned to the student
    const studentTasks = await Task.find({ assignedTo: student._id });

    const completedCount = await Task.countDocuments({
      assignedTo: student._id,
      status: 'completed',
    });

    res.status(200).json({
      message: `Hello ${student.name} , You have ${
        studentTasks.length - completedCount
      } tasks remaining, `,
      tasks: studentTasks,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving tasks', error });
  }
}

async function updateTasks(req, res) {
  try {
    const { student_name, task_name, status } = req.body;

    // Find the student by name
    const student = await Student.findOne({ name: student_name });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Find the task assigned to the student by task name
    const task = await Task.findOne({
      assignedTo: student._id,
      taskName: task_name,
    });

    if (!task) {
      return res
        .status(404)
        .json({ message: 'Task not found for the specified student' });
    }

    // Update the task status
    task.status = status;
    await task.save();
    res.status(200).json({ message: 'Task status updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating task status', error });
  }
}

module.exports = { updateTasks, getTasks };
