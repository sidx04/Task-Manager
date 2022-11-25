const mongoose=require('mongoose')

const TaskSchema=new mongoose.Schema({
    
    /**
     *`  var:{
     *>     validators go in here
     *`  }
     */

    name:{
        type:String,
        required:[true,'must provide data'],
        trim:true,
        maxLength:[20,'data cant exceed 20 characters']

    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('Task',TaskSchema)