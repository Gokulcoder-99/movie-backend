const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(v);
      },
      message: "Please enter a strong password-eg: Password@1",
    },
  },
  avatar: {
    type: String,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30SfNCE6e-sM7qSa8Z9CwrktkRgrjbHKyeSh3VyZDrsXLDVW0uHVcjmeki6bBSwQnqWo&usqp=CAU",
  },
  dob: {
    type: String,
  },
  bio: {
    type: String,
    default: "All is well when you trust it",
  },
  userRole: {
    type: String,
    default: "User",
  },
});
userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
  });

module.exports = mongoose.model("User", userSchema);


