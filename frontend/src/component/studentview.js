import React from "react";
import axios from "axios";
import { API_URL_GET,API_URL_DELETE} from "../url/url"
import { useEffect,useState} from "react"; 
import "./studentview.css"
import { Link } from "react-router-dom";
import { IoTrashSharp } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";


function View() {
        const[collect,setcollect]=useState([])
        const[ref,setref]=useState(true)
       

    let delete_data =(v)=>{
               axios.delete(`${API_URL_DELETE}/${v._id}`).then((res)=>{
                setref(!ref)
               })}
   
    useEffect(()=>{
             axios.get(API_URL_GET)
             .then((res)=>{console.log(res.data)
             setcollect(res.data) 
             })},[ref])
return(<>

  <h2 id="topic">STUDENT DETAILS</h2>
   <table>
   <thead>
    <tr>
      <th>NAME</th>
      <th>EMAIL</th>
      <th>MOTHERNAME</th>
      <th>FATHERNAME</th>
      <th>ADDRESS</th>
      <th>DOB</th>
      <th>CONTACT</th>
      <th>GENDER</th>
    </tr>
   </thead>
   <tbody>
   {
      collect && collect.map((v,i)=>(
      <tr key={i}> 
      <td>{v.name}</td>
      <td>{v.email}</td>
      <td>{v.mothername}</td>
      <td>{v.fathername}</td>
      <td>{v.address}</td>
      <td>{v.dob}</td>
      <td>{v.contact}</td>
      <td>{v.gender}</td>
      <button onClick={()=>{delete_data(v)}} id="trash"><IoTrashSharp /></button>
      <Link to={`/Editcustomer/${v._id}`}id="edit1"><FaRegEdit /></Link>

      </tr>
      ))
    }
   </tbody>
   </table>


  </>)
}

export default View