const mongoose= require("mongoose")
const data_schema_emp= mongoose.Schema({

    employee_name:{
        type:String,
        required:true,
    },
    employee_email:{
        type:String, 
        required:true,
    },
    employee_contact:{
        type:String,
        required:true,
    },
    employee_address:{
        type:String,
        required:true,
    },
    employee_dob:{
        type:String,
        required:true,
    },
    employee_salary:{
        type:String,
        required:true,
    },
    employee_destination:{
        type:String,
        required:true,
    },
    employee_doj:{
        type:String,
        required:true,
    },
    employee_dor:{
        type:String,
        required:true,
    },
    employee_experience:{
        type:String,
        required:true,
    },
})

module.exports=mongoose.model("kalai_employee",data_schema_emp)