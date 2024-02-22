const User = require("../../models/usermodel");
const { createToken } = require("../../utility/jwt");
const bcrypt = require('bcryptjs')

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({
        message: "User does not  exist",
      });
    }

    const auth = await bcrypt.compare(password, userExist.password);
    if (!auth) {
      return res.status(400).json({
        message: "Incorrect password",
      });
    }
    const token = createToken(email);

    res.cookie("Token", token);

    res.status(200).json({
      message: "User successfully logged in",
      userExist,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

module.exports = login;
