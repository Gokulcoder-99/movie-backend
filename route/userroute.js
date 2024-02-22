const express = require("express");
const userRoute = express.Router();
const allMovies = require('../controller/usercontroller/allMovies')
const movie = require('../controller/usercontroller/movie')
const celebrity = require('../controller/usercontroller/celebrity')


userRoute.get('/allmovies',allMovies)
         .post('/movie',movie)
         .post('/celebrity',celebrity)


module.exports = userRoute;