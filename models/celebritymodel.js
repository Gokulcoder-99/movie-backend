const mongoose = require("mongoose");

const celebritySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
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
  avatar: {
    type: String,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30SfNCE6e-sM7qSa8Z9CwrktkRgrjbHKyeSh3VyZDrsXLDVW0uHVcjmeki6bBSwQnqWo&usqp=CAU",
  },
  dob: {
    type: String,
    require: true,
  },
  bio: {
    type: String,
    require: true,
  },
  isActor:{
    type:Boolean,
    default:false
  },
  isProducer:{
    type:Boolean,
    default:false
  }
});

module.exports = mongoose.model("Celebrity",celebritySchema);