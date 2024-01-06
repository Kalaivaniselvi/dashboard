//express
const express=require("express");
const app=express();
const mongoose=require("mongoose")
const data_schema_emp=require("./schema1")
const data_schema_cust=require("./schema2")
const data_schema=require("./schema")
const data_schema_login=require("./schemalog")
const cors=require("cors")
const multer=require("multer")
const bcrypt = require("bcrypt");


const mystr=multer.diskStorage({
    destination:(req,file,cb)=>{
       cb(null,"./upload")
    },
    filename:(req,file,cb)=>{
       cb(null,Date.now()+" "+file.originalname)
    }
}) 
const upload=multer({
    storage:mystr
 })
 
//instant object:
app.use(express.json());
app.use(cors())
//mongoose
mongoose.connect("mongodb://localhost:27017/kalai_student")
.then(()=>{
    console.log("db is connected")
})
.catch(()=>{
    console.log("db is not connected")
})
app.get("/get",async(req,res)=>{
    const get_data=await data_schema.find({})
    res.json(get_data)
})

app.post("/create",async(req,res)=>{
    const data=new data_schema({
       name:req.body.name,
       email:req.body.email,
       mothername:req.body.mothername,
       fathername:req.body.fathername,
       address:req.body.address,
       dob:req.body.dob,
       contact:req.body.contact,
       gender:req.body.gender
    })
    const save_data=await data.save();
    res.json(save_data); 
})
app.put("/update/:id", async (req, res) => {
    const updatedata = await data_schema.findByIdAndUpdate(req.params.id,
    { $set: req.body },
    { new: true } );
    res.json({ msg: "you'r update successfuly", data: updatedata });
    });
  
app.delete("/delete/:id", async (req, res) => {
      const deleteData = await data_schema.findByIdAndDelete(req.params.id);
      res.json({ msg: "delete you'r account" });
      });
      
app.get ("/get/:id",async (req, res) => {
        const find_data = await data_schema.findById(req.params.id);
        res.json(find_data);   }) 

 app.post("/api",upload.single("image"),(req,res)=>{
            try{
             res.json("file stored succesfully")
            }
            catch(err){
             res.json(err)
            }
          })

        app.get("/get1",async(req,res)=>{
            const get_data=await data_schema_emp.find({})
            res.json(get_data)
        })
        
        app.post("/create1",async(req,res)=>{
            const data=new data_schema_emp({
             employee_name:req.body.employee_name,
        employee_email:req.body.employee_email,
        employee_contact:req.body.employee_contact,
        employee_address:req.body.employee_address,
        employee_dob:req.body.employee_dob,
        employee_salary:req.body.employee_salary,
        employee_destination:req.body.employee_destination,
        employee_doj:req.body.employee_doj,
        employee_dor:req.body.employee_dor,
        employee_experience:req.body.employee_experience
            })
            const save_data=await data.save();
            res.json(save_data); 
        })
        app.put("/update1/:id", async (req, res) => {
            const updatedata = await data_schema_emp.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true } );
            res.json({ msg: "you'r update successfuly", data: updatedata });
            });
          
        app.delete("/delete1/:id", async (req, res) => {
              const deleteData = await data_schema_emp.findByIdAndDelete(req.params.id);
              res.json({ msg: "delete you'r account" });
              });
              
        app.get ("/get1/:id",async (req, res) => {
                const find_data = await data_schema_emp.findById(req.params.id);
                res.json(find_data);   }) 
                
 app.get("/get2",async(req,res)=>{
            const get_data=await data_schema_cust.find({})
            res.json(get_data)
        })
        
        app.post("/create2",async(req,res)=>{
            const data=new data_schema_cust({
             ...req.body
            })
            const save_data=await data.save();
            res.json(save_data); 
        })
        app.put("/update2/:id", async (req, res) => {
            const updatedata = await data_schema_cust.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true } );
            res.json({ msg: "you'r update successfuly", data: updatedata });
            });
          
        app.delete("/delete2/:id", async (req, res) => {
              const deleteData = await data_schema_cust.findByIdAndDelete(req.params.id);
              res.json({ msg: "delete you'r account" });
              });
              
        app.get ("/get2/:id",async (req, res) => {
                const find_data = await data_schema_cust.findById(req.params.id);
                res.json(find_data);   }) 
        
 app.post("/create3", async (req, res) => {
                    plaintxt = req.body.password.toString();
                    const hashpassword = await bcrypt.hash(plaintxt, 7);
                    const data = new data_schema_login({
                      ...req.body,
                      password: hashpassword,
                    });
                    const save_data = await data.save();
                    res.json(save_data);
                  });

app.post("/login", async (req, res) => {
                    const usermail = await data_schema_login.findOne({ username: req.body.username });
                    if (!usermail) return res.json("username  not valid");
                  
                    const userpassword = await bcrypt.compare(
                      req.body.password,
                      usermail.password
                    );
                    if (!userpassword)
                      return res.json({
                        message: "Not valid",
                      });
                  
                    // const token = jwt.sign({ id: usermail._id }, process.env.TOKEN);
                    res.json({ message: "login success" });
                    // res.json("log in succes");
                  });
         
app.listen(8002,()=>{
    console.log("server is running port:8002")
});