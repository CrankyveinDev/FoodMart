import User from "../models/User.js";
import { validationResult } from "express-validator";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
const secretKey = "catchmeifyoucan";
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
    const userData = await User.findOne({ email: userEmail });
    // console.log(userData);
    if (!userData) {
      res
        .status(401)
        .json({ error: "User does not exist, Please sign up first" });
    }

    const pwdCompare = bcryptjs.compare(req.body.password, userData.password);

    if (!pwdCompare) {
      res.status(402).json({ error: "Password is incorrect" });
    }
    const data = {
      user: {
        id: userData._id,
      },

    };

    const authToken=jwt.sign(data,secretKey);
    res.status(200).json({ success: true,authToken:authToken });
  } catch (error) {
    // console.log(error);
    res.status(400).json({ error: "server error" });
  }
};
export { login };
