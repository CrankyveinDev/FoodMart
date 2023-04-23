import User from "../models/User.js";
import bcryptJs from "bcryptjs";
import { validationResult } from "express-validator";

const signUP = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // console.log(errors.array());
    return res.status(404).json({ errors: errors.array() });
  }
  const salt = bcryptJs.genSaltSync(10);
  let secPassword = await bcryptJs.hashSync(req.body.password, salt);
  const data = await User.findOne({ email: req.body.email });
  if (data)
    return res
      .status(404)
      .json({ errors: [{ msg: "Email Already in Use Please login" }] });
  try {
    const data = await User.create({
      name: req.body.name,
      phone: req.body.phone,
      location: req.body.location,
      email: req.body.email,
      password: secPassword,
    });
    // console.log(data);
    res.status(200).json({ success: true });
  } catch (error) {
    // console.log(error);
    res.status(400).json({ error });
  }
};
export { signUP };
