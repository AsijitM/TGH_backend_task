const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  department: String,
  password: String,
  role: { type: String, default: 'student' },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
