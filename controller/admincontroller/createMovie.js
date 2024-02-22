const Movie = require("../../models/moviemodel");

const createMovie =async(req,res)=>{
    const data = req.body;
    try{
      const movie = await Movie.findOne({name:{ $regex:data.name, $options: 'i' }})
      if(movie){
        return res.status(400).json({
          message:"movie alerady exist"
        })
      }
      const movieNew =  await Movie.create({...data});
      if(!movieNew){
        res.status(400).json({
            message:'Fail to create a movies'
        })
      }
      res.status(200).json({
        message:'Movie created sucessfully'
      })
    }catch(err){
        res.status(500).json({
            status:'fail in create movies',
            message:err.message
        })
    }
}

module.exports = createMovie