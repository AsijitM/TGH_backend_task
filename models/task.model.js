const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskName: String,
  dueTime: Date,
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  status: {
    type: String,
    enum: ['pending', 'overdue', 'completed'],
    default: 'pending',
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
