const express = require("express");
const { register, login } = require("../controllers/user");

const userRoute = express.Router();

userRoute.post("/register", register, login);
userRoute.post("/login", login);

module.exports = userRoute;
