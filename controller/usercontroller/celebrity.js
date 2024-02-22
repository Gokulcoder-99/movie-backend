const celebritymodel = require("../../models/celebritymodel");
const moviemodel = require("../../models/moviemodel");

 
const celebrity = async(req,res)=>{
    const {celebrityEmail} = req.body;
    try{
    const celebrityData = await celebritymodel.findOne({celebrityEmail})
    const movieValue = await moviemodel.find({celebrityEmail});
    res.status(200).json({
        message:"Success fetch the single celebrity",
        movieValue,
        celebrityData,
    })
}catch(err){
    res.status(500).json({
        status:'fails',
        message:err.message
    })
}
}

module.exports = celebrity