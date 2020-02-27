"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("./routes/user");
const contact_1 = require("./routes/contact");
const auth_1 = require("./routes/auth");
const app = express_1.default();
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.send("Hello From Express Ts");
});
app.use("/api/users", user_1.router);
app.use("/api/contact", contact_1.router);
app.use("/api/auth", auth_1.router);
app.listen(5000, () => {
    console.log(`Server is Running On Port ${PORT}`);
});
