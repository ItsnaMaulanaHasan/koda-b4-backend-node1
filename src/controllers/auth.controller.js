const userModel = require("../models/users.model");

function login(req, res) {
  const { email, password } = req.body;
  const data = userModel.getUserByEmail(email);
  console.log(data);

  if (!data) {
    res.status(400).json({
      success: false,
      message: "Wrong email or password",
    });
    return;
  }

  if (email !== data.email && password !== password) {
    res.status(400).json({
      success: false,
      message: "Wrong email or password",
    });
    return;
  }

  res.json({
    success: true,
    message: "Login success",
  });
}

function register(req, res) {
  const data = req.body;
  userModel.addUser(data);

  res.json({
    success: true,
    message: "Register success",
  });
}

module.exports = {
  login,
  register,
};
