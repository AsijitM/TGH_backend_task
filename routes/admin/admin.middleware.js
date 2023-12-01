const addStudentMiddle = (permissions) => {
  return (req, res, next) => {
    const role = req.body.role;
    if (permissions.includes(role)) {
      next();
    } else {
      return res
        .status(401)
        .json({ message: 'You do not have enough permissions!!' });
    }
  };
};

module.exports = {
  addStudentMiddle,
};
