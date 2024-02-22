const express = require("express");
const authroute = express.Router();
const signup = require('../controller/authcontroller/signup');
const login = require("../controller/authcontroller/login");
const update = require("../controller/authcontroller/update");
const deleteUser = require('../controller/authcontroller/delete')
authroute
  .post("/signup", signup)
  .post("/login", login)
  .put('/update',update)
  .delete('/delete',deleteUser)

module.exports = authroute;