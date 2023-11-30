const express = require('express');
const Student = require('../../models/student.model');

const loginRouter = express.Router();

const adminCredentials = { email: 'admin@admin.com', password: 'admin' };

// Common login endpoint
loginRouter.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if the user is an admin
    if (
      email === adminCredentials.email &&
      password === adminCredentials.password
    ) {
      // Admin login
      res.status(200).redirect('admin/admin-panel');
    } else {
      // Student login
      const student = await Student.findOne({ email, password });

      if (!student) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

        // converting the ObjectID to get the data
      const idValue = student._id.toHexString();
    //   console.log("id",idValue);

    //   console.log('s', student._id);
      res.status(200).redirect(`/student/${idValue}`);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error during login', error });
  }
});

module.exports = {
  loginRouter,
};
