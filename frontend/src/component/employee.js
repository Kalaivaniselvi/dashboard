import {  useState } from "react"
import { API_URL_POST_EMP} from "../url/url"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "./studentview.css"


function Employee() {
    const navigate=useNavigate()
    const[employee_name,setemployee_name]=useState("")
    const[employee_email,setemployee_email]=useState("")
    const[employee_contact,setemployee_contact]=useState("")
    const[employee_address,setemployee_address]=useState("")
    const[employee_dob,setemployee_dob]=useState("")
    const[employee_salary,setemployee_salary]=useState("")
    const[employee_destination,setemployee_destination]=useState("")
    const[employee_doj,setemployee_doj]=useState("")
    const[employee_dor,setemployee_dor]=useState("")
    const[employee_experience,setemployee_experience]=useState("")
    function handle(){
      axios.post(API_URL_POST_EMP,{
        employee_name,
        employee_email,
        employee_contact,
        employee_address,
        employee_dob,
        employee_salary,
        employee_destination,
        employee_doj,
        employee_dor,
        employee_experience
      })
     navigate("/Viewemployee")
    }

     return(<> 
     <center><h3>EMPLOYEE DETAILS</h3></center>     
      <form id="form">
       <div id="assign">
       <div>
     <span>Name:</span><br/><br/>
     <span>Email:</span><br/><br/>
     <span>Contact:</span><br/><br/>
     <span>Address:</span><br/><br/><br/><br/>
     <span>Date of birth:</span><br/><br/>
     <span>Salary:</span><br/><br/>
     <span>Designation:</span><br/><br/>
     <span>Date of joining:</span><br/><br/>
     <span>Date of Resigning:</span><br/><br/>
     <span>Experience:</span><br/><br/>
     </div>
     <div>
     <input type="text"
            value={employee_name}
            onChange={(e)=>{setemployee_name(e.target.value)}}/>
     <br/><br/>
     <input type="text"
            value={employee_email}
            onChange={(e)=>{setemployee_email(e.target.value)}}/>
      <br/><br/>
     <input type="text"
            value={employee_contact}
            onChange={(e)=>{setemployee_contact(e.target.value)}}/>
      <br/><br/>
     <textarea rows={3} cols={25}
            value={employee_address}
            onChange={(e)=>{setemployee_address(e.target.value)}}/>      
      <br/><br/>
     <input type="date"
            value={employee_dob}
            onChange={(e)=>{setemployee_dob(e.target.value)}}/>      
      <br/><br/>
     <input type="text"
            value={employee_salary}
            onChange={(e)=>{setemployee_salary(e.target.value)}}/>      
      <br/><br/>
     <input type="text"
            value={employee_destination}
            onChange={(e)=>{setemployee_destination(e.target.value)}}/>      
      <br/><br/>
     <input type="date"
            value={employee_doj}
            onChange={(e)=>{setemployee_doj(e.target.value)}}/>      
      <br/><br/>
     <input type="date"
            value={employee_dor}
            onChange={(e)=>{setemployee_dor(e.target.value)}}/> 
      <br/><br/>
     <input type="text"
            value={employee_experience}
            onChange={(e)=>{setemployee_experience(e.target.value)}}/> 
      <br/><br/>
      </div></div>
     <button onClick={handle} id="button1">submit</button>
     </form>
     

     </>)
}
export default Employee