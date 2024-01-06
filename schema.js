const mongoose= require("mongoose")
const data_schema= mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mothername:{
        type:String,
        required:true,
    },
    fathername:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    dob:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model("kalai_student",data_schema)