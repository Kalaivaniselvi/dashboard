import {  useState } from "react"
import { API_URL_POST_CUST} from "../url/url"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "./studentview.css"


function Customer() {
    const navigate=useNavigate()
    const[name,setname]=useState("")
    const[address,setaddress]=useState("")
    const[contact,setcontact]=useState("")
    const[GST,setGST]=useState("")


    function handle(){
      axios.post(API_URL_POST_CUST,{
        name,
        address,
        contact,
        GST
      })
     navigate("/Viewcustomer")
    }

     return(<> 
     <center><h3>CUSTOMER DETAILS</h3></center>     
      <form id="form">
      <div id="assign">
       <div>
     <span>Name:</span><br/><br/>
     <span>Address:</span><br/><br/><br/><br/>
     <span>Contact:</span><br/><br/>
     <span>GST:</span><br/>
     </div>
      <div>
     <input type="text"
            value={name}
            onChange={(e)=>{setname(e.target.value)}}/>
     <br/><br/>
     <textarea rows={3} cols={25}
            value={address}
            onChange={(e)=>{setaddress(e.target.value)}}/>      
      <br/><br/>
     <input type="text"
            value={contact}
            onChange={(e)=>{setcontact(e.target.value)}}/>      
      <br/><br/>
     <input type="text"
            value={GST}
            onChange={(e)=>{setGST(e.target.value)}}/>      
      <br/><br/>
      </div></div>
     <button onClick={handle} id="button1">submit</button>
     </form>
     

     </>)
}
export default Customer