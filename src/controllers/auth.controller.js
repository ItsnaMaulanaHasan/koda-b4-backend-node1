const userModel = require("../models/users.model");

/**
 * POST /auth/login
 * @summary Login user
 * @tags authentication
 * @param  {string} email.form.required - Email of user - application/x-www-form-urlencoded
 * @param  {string} password.form.required - Password of user - application/x-www-form-urlencoded
 * @return {object} 200 - login success
 * @return {object} 401 - wrong email or password
 */
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
    res.status(401).json({
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

/**
 * POST /auth/register
 * @summary Register user
 * @tags authentication
 * @param  {string} fullName.form.required - fullname of user - application/x-www-form-urlencoded
 * @param  {string} email.form.required - Email of user - application/x-www-form-urlencoded
 * @param  {string} password.form.required - Password of user - application/x-www-form-urlencoded
 * @return {object} 200 - login success
 */
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
