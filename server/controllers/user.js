const UserSchema = require("../database/models/Users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserSchema.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists." });
    }
    const newUser = new UserSchema({
      name,
      email,
      password,
    });
    await newUser.save();
    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserSchema.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User does not exist." });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Incorrect password." });
    }
    const payload = { id: user._id };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
      expiresIn: "360d",
    });
    return res.status(200).json({ token, userId: user._id });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  register,
  login,
};
