import { validationResult } from "express-validator";
import { addUser, getUserByEmail } from "../models/users.model.js";

/**
 * POST /auth/login
 * @summary Login user
 * @tags authentication
 * @param  {string} email.form.required - Email of user - application/x-www-form-urlencoded
 * @param  {string} password.form.required - Password of user - application/x-www-form-urlencoded
 * @return {object} 200 - login success
 * @return {object} 401 - wrong email or password
 */
export function login(req, res) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    res.json({
      success: false,
      message: "Error validation",
      results: result.array(),
    });
    return;
  }
  const { email, password } = req.body;
  const data = getUserByEmail(email);
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
export function register(req, res) {
  const data = req.body;
  addUser(data);

  res.json({
    success: true,
    message: "Register success",
  });
}
