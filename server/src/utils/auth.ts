import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const Auth = (req: Request, res: Response, next: NextFunction) => {
  // check if there is token in header
  const Token: any = req.header("x-auth-token");
  if (!Token)
    res.status(401).json({ Error: "No Token , Authorization Denied" });

  try {
    const decodeed: any = jwt.verify(Token, "process.env.SECERET");

    // in custom.d.ts file we are injecting user to request
    req.userId = decodeed.userId;
    next();
  } catch (error) {
    res.status(401).json({ Error: "Invalid Token , Authorization Denied" });
  }
};

export { Auth };
