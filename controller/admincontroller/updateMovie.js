const Movie = require("../../models/moviemodel");

const updateMovie =async(req,res)=>{
    const data = req.body;
    try{
      const movieData =  await Movie.findById(data.movieId);

      movieData.name = data.name || movieData.name
      movieData.yor = data.yor || movieData.yor
      movieData.plot = data.plot || movieData.plot
      movieData.poster = data.poster || movieData.poster
      movieData.actors = data.actors || movieData.actors
      movieData.producer = data.producer || movieData.producer
      
      const movieValue = await movieData.save()
      res.status(200).json({
        message:'Movie update sucessfully',
        movieValue,
      })
    }catch(err){
        res.status(500).json({
            status:'fail',
            message:err.message
        })
    }
}

module.exports = updateMovie