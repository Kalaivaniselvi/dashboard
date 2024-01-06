import {  useState } from "react"
import { API_URL_POST} from "../url/url"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "./studentview.css"


function Parent_data() {
    const navigate=useNavigate()
    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    const[mothername,setmothername]=useState("")
    const[fathername,setfathername]=useState("")
    const[address,setaddress]=useState("")
    const[dob,setdob]=useState("")
    const[contact,setcontact]=useState("")
    const[gender,setgender]=useState("")

    function handle(){
      axios.post(API_URL_POST,{
        name,
        email,
        mothername,
        fathername,
        address,
        dob,
        contact,
        gender,
      })
     navigate("/View")
    }

     return(<> 
     <center><h3>STUDENT DETAILS</h3></center>     
      <form id="form">
     <div id="assign">
     <div>
     <span>Name:</span><br/><br/>
     <span>Email:</span><br/><br/>
     <span>Mothername:</span><br/><br/>
     <span>Fathername:</span><br/><br/>
     <span>Address:</span><br/><br/><br/><br/>
     <span>DOB:</span><br/><br/>
     <span>Contact:</span><br/><br/>
     <span>Gender:</span><br/><br/>
     </div>
     <div>
     <input type="text"
            value={name}
            onChange={(e)=>{setname(e.target.value)}}/>
     <br/><br/>
     <input type="text"
            value={email}
            onChange={(e)=>{setemail(e.target.value)}}/>
      <br/><br/>
     <input type="text"
            value={mothername}
            onChange={(e)=>{setmothername(e.target.value)}}/>
      <br/><br/>
    
     <input type="text"
            value={fathername}
            onChange={(e)=>{setfathername(e.target.value)}}/>      
      <br/><br/>
      
     <textarea rows={3} cols={25}
            value={address}
            onChange={(e)=>{setaddress(e.target.value)}}/>      
      <br/><br/>
      
     <input type="date"
            value={dob}
            onChange={(e)=>{setdob(e.target.value)}}/>      
      <br/><br/>
     
     <input type="text"
            value={contact}
            onChange={(e)=>{setcontact(e.target.value)}}/>      
      <br/><br/>
     <input type="text"
            value={gender}
            onChange={(e)=>{setgender(e.target.value)}}/>      
      <br/><br/>
      </div>
      </div>
     <button onClick={handle} id="button1">submit</button>
     </form>
     

     </>)
}
export default Parent_data