import jwt from "jsonwebtoken";

export const NewToken = (id: string) =>
  jwt.sign({ userId: id }, "process.env.SECERET", { expiresIn: 36000 });
