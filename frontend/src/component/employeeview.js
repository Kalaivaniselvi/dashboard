import React from "react";
import axios from "axios";
import { API_URL_GET_EMP,API_URL_DELETE_EMP} from "../url/url"
import { useEffect,useState} from "react"; 
import "./studentview.css"
import { Link } from "react-router-dom";
import { IoTrashSharp } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";


function Employee_View() {
        const[collect,setcollect]=useState([])
        const[ref,setref]=useState(true)
       

    let delete_data =(v)=>{
               axios.delete(`${API_URL_DELETE_EMP}/${v._id}`).then((res)=>{
                setref(!ref)
               })}
   
    useEffect(()=>{
             axios.get(API_URL_GET_EMP)
             .then((res)=>{console.log(res.data)
             setcollect(res.data) 
             })},[ref])
return(<>

  <h2 id="topic">EMPLOYEE DETAILS</h2>
   <table>
   <thead>
    <tr>
      <th>NAME</th>
      <th>EMAIL</th>
      <th>CONTACT</th>
      <th>ADDRESS</th>
      <th>DOB</th>
      <th>SALARY</th>
      <th>DESTINATION</th>
      <th>DATE OF JOINING</th>
      <th>DATE OF RESIGNING</th>
      <th>EXPERIENCE</th>
    </tr>
   </thead>
   <tbody>
   {
      collect && collect.map((v,i)=>(
      <tr key={i}> 
      <td>{v.employee_name}</td>
      <td>{v.employee_email}</td>
      <td>{v.employee_contact}</td>
      <td>{v.employee_address}</td>
      <td>{v.employee_dob}</td>
      <td>{v.employee_salary}</td>
      <td>{v.employee_destination}</td>
      <td>{v.employee_doj}</td>
      <td>{v.employee_dor}</td>
      <td>{v.employee_experience}</td>
      <button onClick={()=>{delete_data(v)}} id="trash"><IoTrashSharp /></button>
      <Link to={`/Editcustomer/${v._id}`}id="edit1"><FaRegEdit /></Link>

      </tr>
      ))
    }
   </tbody>
   </table>
  </>)
}

export default Employee_View