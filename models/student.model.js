const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  department: String,
  password: String,
  role: { type: String, default: 'student' },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
