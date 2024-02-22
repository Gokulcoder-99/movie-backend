const celebrity = require("../../models/celebritymodel");

const deletecelebrity =async(req,res)=>{
    const {email} = req.body;
    try{
       await celebrity.deleteOne({email});
      
      res.status(200).json({
        message:'celebrity deleted sucessfully',
      })
    }catch(err){
        res.status(500).json({
            status:'fail',
            message:err.message
        })
    }
}

module.exports = deletecelebrity