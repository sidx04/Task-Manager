const {CustomAPIError}=require('../errors/custom-error')

const errorHandlerMiddleWare=(err,req,res,next)=>{
    if (err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(err.status).json({msg:err.message})
}

module.exports=errorHandlerMiddleWare