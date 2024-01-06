import React, { useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_URL_GET_EMP,API_URL_PUT_EMP } from "../url/url";
import { useNavigate } from "react-router-dom";

function Edit_employee() {
  const{id}=useParams()
  const navigate=useNavigate()
  console.log(id);
  const[employee,setemployee]=useState({
    employee_name:"",
    employee_email:"",
    employee_contact:"",
    employee_address:"",
    employee_dob:"",
    employee_salary:"",
    employee_destination:"",
    employee_doj:"",
    employee_dor:"",
    employee_experience:""
  })
  useEffect(() => {
    axios.get(`${API_URL_GET_EMP}/${id}`)
      .then((res) => {
        setemployee(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id])

  function handle_edit() {
    axios.put(`${API_URL_PUT_EMP}/${id}`,employee)
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
    navigate("/Viewemployee")
  }
   
    return(<>
    <center><h3>EMPLOYEE DETAILS</h3></center>     
      <form id="form">
     <span>Name:</span>
     <input type="text"
            value={employee.employee_name}
            onChange={(e)=>{setemployee({...employee,employee_name:e.target.value})}}/>
     <br/><br/>
     <span>Email:</span>
     <input type="text"
            value={employee.employee_email}
            onChange={(e)=>{setemployee({...employee,employee_email:e.target.value})}}/>
      <br/><br/>
     <span>Contact:</span>
     <input type="text"
            value={employee.employee_contact}
            onChange={(e)=>{setemployee({...employee,employee_contact:e.target.value})}}/>
      <br/><br/>
     <span> Address:</span>
     <textarea rows={3} cols={20}
            value={employee.employee_address}
            onChange={(e)=>{setemployee({...employee,employee_address:e.target.value})}}/>
       <br/><br/>
      <span>Date of birth:</span>
     <input type="date"
            value={employee.employee_dob}
            onChange={(e)=>{setemployee({...employee,employee_dob:e.target.value})}}/>

      <br/><br/>
      <span>Salary:</span>
     <input type="text"
            value={employee.employee_salary}
            onChange={(e)=>{setemployee({...employee,employee_salary:e.target.value})}}/>

      <br/><br/>
      <span>Destination:</span>
     <input type="text"
            value={employee.employee_destination}
            onChange={(e)=>{setemployee({...employee,employee_destination:e.target.value})}}/>

      <br/><br/>
      <span>Date of joining:</span>
     <input type="date"
            value={employee.employee_doj}
            onChange={(e)=>{setemployee({...employee,employee_doj:e.target.value})}}/>

      <br/><br/>
      <span>Date of Resigning:</span>
      <input type="date"
            value={employee.employee_dor}
            onChange={(e)=>{setemployee({...employee,employee_dor:e.target.value})}}/>

      <br/><br/>
      <span>Experience:</span>
      <input type="text"
            value={employee.employee_experience}
            onChange={(e)=>{setemployee({...employee,employee_experience:e.target.value})}}/>

      <br/><br/>
     <button onClick={handle_edit} id="button1">Update</button>
     </form>
     
    </>)
}
export default Edit_employee