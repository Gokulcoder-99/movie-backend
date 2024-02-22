const User = require("../../models/usermodel");

const update = async (req, res) => {
  const { name, email,avatar, dob } = req.body;

  try {
    const userExist = await User.findOne({ email });

    userExist.name = name || userExist.name;
    userExist.email = email || userExist.email;
    userExist.dob = dob || userExist.dob ;
    userExist.avatar = avatar || userExist.avatar ;
  
     const lastestUser = await userExist.save()

    res.status(200).json({
      message: "User successfully upadted",
      lastestUser,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

module.exports = update;
