const Movie = require("../../models/moviemodel");

const deleteMovie =async(req,res)=>{
    const {movieId} = req.body;
    try{
       await Movie.deleteOne({_id:movieId});
      res.status(200).json({
        message:'Movie deleted sucessfully',
      })
    }catch(err){
        res.status(500).json({
            status:'fail in create movies',
            message:err.message
        })
    }
}

module.exports = deleteMovie