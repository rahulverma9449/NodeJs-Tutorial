// Please don't change the pre-written code
// Import the necessary modules here

import express, { urlencoded } from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import UserController from "./src/controllers/user.controller.js";
import session from "express-session";
import { auth } from "./src/middleware/auth.js";

const userController = new UserController();

const app = express();

app.use(
  session({
    secret: "codingninja",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
// Write your code here

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

app.get("/", auth, userController.getSecure);
app.get("/register", userController.getRegister);
app.post("/register", userController.addUser);
app.get("/login", userController.getLogin);
app.post("/login", userController.loginUser);

export default app;
