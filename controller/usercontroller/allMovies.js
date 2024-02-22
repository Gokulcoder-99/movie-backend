const moviemodel = require("../../models/moviemodel");

const allMovies = async(req,res)=>{
    try{
   const movies = await moviemodel.find();
   res.status(200).json({
    message:"Success fully fetched all moveis",
    movies
   })
}catch(err){
    res.status(500).json({
       message:err.message,
    })
}

}

module.exports= allMovies;