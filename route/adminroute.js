const express = require("express");
const adminRoute = express.Router();
const createMovie = require('../controller/admincontroller/createMovie')
const createCelebrity = require('../controller/admincontroller/createCelebrity')
const updateMovie = require('../controller/admincontroller/updateMovie')
const updateCelebrity = require('../controller/admincontroller/updatecelebrity');
const deleteCelebrity = require('../controller/admincontroller/deleteCelebrity')
const deleteMovie = require('../controller/admincontroller/deleteMovie')
adminRoute.post('/movie',createMovie)
          .post('/celebrity',createCelebrity)
          .put('/movie',updateMovie)
          .put('/celebrity',updateCelebrity)
          .delete('/movie',deleteMovie)
          .delete('/celebrity',deleteCelebrity)

module.exports = adminRoute;