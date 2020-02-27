import bcrypt from "bcryptjs";
import express, { Request, Response, NextFunction, Router } from "express";
import { check, validationResult, body } from "express-validator";
import { User } from "../Modals/User";
import { NewToken } from "../utils/GenJwt";

const router: Router = express.Router();

const UserValidationObj = [
  check("name", "Please Provide A Valid Name")
    .not()
    .isEmpty(),
  check("email", "Please Provide A Valid Email Address").isEmail(),
  check("password", "Password Must Be 6 Or More Characters").isLength({
    max: 20,
    min: 6
  })
];

//create New User  --> api/users
// Get   api/users
router.post("/", UserValidationObj, async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, password } = req.body;
  const UserExists = await User.findOne({ email });

  if (UserExists) return res.status(500).send({ Error: "User Already Exists" });

  const HshedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    name: name,
    email: email,
    password: HshedPassword
  });
  const Token = NewToken(newUser.id);
  /*
  res.cookie("Token", Token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365 // 1year cookie
  });
  */

  res.json({ Token });
});

export { router };
