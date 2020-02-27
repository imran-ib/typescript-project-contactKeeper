import bcrypt from "bcryptjs";
import express, { Request, Response, Router } from "express";
import { check, validationResult } from "express-validator";
import { User } from "../Modals/User";
import jwt from "jsonwebtoken";
import { Auth } from "../utils/auth";

const router: Router = express.Router();

const UserValidationObj = [
  check("email", "Please Provide A Valid Email Address").isEmail(),
  check("password", "Password Must Be 6 Or More Characters").isLength({
    max: 20,
    min: 6
  })
];

//@Get  the  Loged in User
// Get   api/auth

router.get("/", Auth, async (req: Request, res: Response) => {
  const user = await User.findById(req.userId).select("-password");
  if (!user) res.status(500).json({ Error: "Server Error" });
  res.json(user);
});

// User Login Route

router.post("/", UserValidationObj, async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;

  const UserExists = await User.findOne({ email });

  if (!UserExists) return res.status(400).send({ Error: "No User Found" });

  const isMatch = await bcrypt.compare(password, UserExists.password);
  if (!isMatch) return res.status(400).send({ Error: "No User Found" });

  const Token: String = jwt.sign(
    { userId: UserExists.id },
    "process.env.SECERET",
    {
      expiresIn: 36000
    }
  );

  res.json({ Token });
});

export { router };
