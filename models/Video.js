const mongoose=require('mongoose');

const VideoSchema=mongoose.Schema({
    title:{
        type:String,
        //required:true
    },
    views:{
        type:Number,
        //required:true
    },
    channel:{
        type:String,
        //required:true
    }
})

module.exports=mongoose.model('Video',VideoSchema);