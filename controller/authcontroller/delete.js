const User = require("../../models/usermodel");

const deleteUser = async (req, res) => {
  const { name, email,avatar, dob } = req.body;

  try {
    await User.deleteOne({ email });

    res.status(200).json({
      message: "User successfully deleted",
      lastestUser,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

module.exports = deleteUser;