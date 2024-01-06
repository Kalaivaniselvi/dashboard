const mongoose= require("mongoose")
const data_schema_cust= mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true,
    },
    GST:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model("kalai_customer",data_schema_cust)