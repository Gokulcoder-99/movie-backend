const celebrity = require("../../models/celebritymodel");

const upadatecelebrity =async(req,res)=>{
    const data = req.body;
    try{
      const celebrityData =  await celebrity.findOne({email:data.email});

      celebrityData.name = data.name || celebrityData.name
      celebrityData.dob = data.dob || celebrityData.dob
      celebrityData.avatar = data.avatar || celebrityData.avatar
      celebrityData.bio = data.bio || celebrityData.bio
      celebrityData.isActor = data.isActor || celebrityData.isActor
      celebrityData.isProducer = data.isProducer || celebrityData.isProducer

      const celebrityValue = await celebrityData.save()

      res.status(200).json({
        message:'celebrity update sucessfully',
        celebrityValue
      })
    }catch(err){
        res.status(500).json({
            status:'fail',
            message:err.message
        })
    }
}

module.exports = upadatecelebrity