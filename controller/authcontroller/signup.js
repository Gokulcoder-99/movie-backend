const User = require("../../models/usermodel");
const { createToken } = require("../../utility/jwt");

const signup = async (req, res) => {
  const { name, email, password, avatar, dob } = req.body;

  try {
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        message: "User already exist",
      });
    }

    const newUser = await User.create({
      name,
      email,
      password,
      dob,
      avatar,
    });
    const token = createToken(email);

    res.cookie("Token", token);

    res.status(200).json({
      message: "User successfully created",
      newUser,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

module.exports = signup;
