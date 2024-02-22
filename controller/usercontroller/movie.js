const moviemodel = require("../../models/moviemodel");
const Celebrity = require("../../models/celebritymodel")
const movie = async(req,res)=>{
    const {movieId} = req.body;
    try{
    const movieData = await moviemodel.findById(movieId).populate('actors').populate('producer')
    
    res.status(200).json({
        message:"Success fetch the single movie",
        movieData,
    })
}catch(err){
    res.status(500).json({
        status:'fails',
        message:err.message
    })
}
}

module.exports = movie