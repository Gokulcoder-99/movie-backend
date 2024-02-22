const celebrity = require("../../models/celebritymodel");

const createcelebrity =async(req,res)=>{
    const data = req.body;
    try{
      const celebrityExist = await celebrity.findOne({email:data.email})
      if(celebrityExist){
        return res.status(400).json({
          message:"Celebrity already exists"
        })
      }
      const celebrityNew =  await celebrity.create({...data});
      if(!celebrityNew){
        res.status(400).json({
            message:'Fail to create a celebrity'
        })
      }
      res.status(200).json({
        message:'celebrity created sucessfully',
        celebrityNew
      })
    }catch(err){
        res.status(500).json({
            status:'fail in create celebrity',
            message:err.message
        })
    }
}

module.exports = createcelebrity