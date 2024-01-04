// Please don't change the pre-written code
// Import the necessary modules here

import { updateUsers, users } from "./user.model.js";

export const renderUpdateForm = (req, res) => {
  res.render("update-form", { user: users[0] });
};

export const updateUser = (req, res) => {
  // const { username, email } = req.body;
  updateUsers(req.body);
  res.render("update-form", { user: users[users.length - 1] });
};
// Write your code here
