import express from "express";
import { signUP } from "../controller/NewUser.js";
import { login } from "../controller/Login.js";
import { check } from "express-validator";
const router = express.Router();
router.post(
  "/signup",
  check("email").isEmail().withMessage("Must be a valid email"),
  check("name")
    .isLength({ min: 5 })
    .withMessage("Name must have minimum of 5 characters")
    .not()
    .matches(/\d/)
    .withMessage("Name must not contain any numbers"),
  check("password")
    .isLength({ min: 5 })
    .withMessage("Password must be of at least 5 characters long")
    .matches(/\d/)
    .withMessage("Password must contain a number"),
  check("phone")
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone number must of length 10"),
  signUP
);

router.post(
  "/login",
  check("email").isEmail().withMessage("Must be a valid email"),
  check("password")
    .isLength({ min: 5 })
    .withMessage("Password must be of at least 5 characters long")
    .matches(/\d/)
    .withMessage("Password must contain a number"),
  login
);

export default router;
