import React, { useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_URL_GET,API_URL_PUT } from "../url/url";
import { useNavigate } from "react-router-dom";
function Editstudent() {
  const{id}=useParams()
  const navigate=useNavigate()
  console.log(id);
  const[student,setstudent]=useState({
    name:"",
    email:"",
    mothername:"",
    fathername:"",
    address:"",
    dob:"",
    contact:"",
    gender:"",
  })
  useEffect(() => {
    axios.get(`${API_URL_GET}/${id}`)
      .then((res) => {
        setstudent(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id])

  function handle_edit() {
    axios.put(`${API_URL_PUT}/${id}`,student)
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
    navigate("/View")
  }
   
    return(<>
    <center><h3>STUDENT DETAILS</h3></center>     
      <form id="form">
     <span>Name:</span>
     <input type="text"
            value={student.name}
            onChange={(e)=>{setstudent({...student,name:e.target.value})}}/>
     <br/><br/>
     <span>Email:</span>
     <input type="text"
            value={student.email}
            onChange={(e)=>{setstudent({...student,email:e.target.value})}}/>
      <br/><br/>
     <span>Mothername:</span>
     <input type="text"
            value={student.mothername}
            onChange={(e)=>{setstudent({...student,mothername:e.target.value})}}/>
      <br/><br/>
     <span>Fathername:</span>
      <input type="text"
            value={student.fathername}
            onChange={(e)=>{setstudent({...student,fathername:e.target.value})}}/>
       <br/><br/>
      <span>Address:</span>
     <textarea rows={3} cols={20}
            value={student.address}
            onChange={(e)=>{setstudent({...student,address:e.target.value})}}/>

      <br/><br/>
      <span>DOB:</span>
     <input type="date"
            value={student.dob}
            onChange={(e)=>{setstudent({...student,dob:e.target.value})}}/>

      <br/><br/>
      <span>Contact:</span>
     <input type="text"
            value={student.contact}
            onChange={(e)=>{setstudent({...student,contact:e.target.value})}}/>

      <br/><br/>
      <span>Gender:</span>
     <input type="text"
            value={student.gender}
            onChange={(e)=>{setstudent({...student,gender:e.target.value})}}/>

      <br/><br/>

     <button onClick={handle_edit} id="button1">Update</button>
     </form>
     
    </>)
}
export default Editstudent  