import User from "../models/User.js";
import { validationResult } from "express-validator";

const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // console.log(errors.array());
    return res.status(404).json({ errors: errors.array() });
  }
  const userEmail = req.body.email;
  const userPassword = req.body.password;
//   console.log(userEmail+"+"+userPassword);
  try {
    const userData = await User.findOne({ email:userEmail });
    // console.log(userData);
    if (!userData) {
      res.status(401).json({ error: "User does not exist, Please sign up first" });
    } else if (userData.password !== userPassword) {
      res.status(402).json({ error: "Password is incorrect" });
    } else {
      res.status(200).json({ success: true });
    }
  } catch (error) {
    // console.log(error);
    res.status(400).json({ error: "server error" });
  }
};
export { login };
