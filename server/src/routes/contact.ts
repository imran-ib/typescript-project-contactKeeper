import express, { Request, Response, NextFunction, Router } from "express";
import { check, validationResult } from "express-validator";
import { Contact } from "../Modals/Contact";
import { User } from "../Modals/User";
import { Auth } from "../utils/auth";
const router: Router = express.Router();

// -----------------Get All Contacts
router.get(
  "/",
  Auth,
  async (req: Request, res: Response, next: NextFunction) => {
    const contacts = await Contact.find({ user: req.userId }).sort({
      date: -1
    });
    if (!contacts) res.status(500).json({ Error: "Server Error" });
    res.json(contacts);
  }
);
// -----------------Post New Contacts
const ContactCheck = [
  check("name", "Please Provide A Valid Name")
    .not()
    .isEmpty()
];

router.post(
  "/",
  Auth,
  ContactCheck,

  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const NewContact = await Contact.create({
      user: req.userId,
      ...req.body
    }).catch(error => res.status(500).json({ Error: "Server Error" }));

    res.json(NewContact);
  }
);
//TODO -----------------Update Conatact
router.post("/", Auth, (req, res) => {
  res.send("Contact Route");
});

export { router };
