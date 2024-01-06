import React, { useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_URL_GET_CUST,API_URL_PUT_CUST } from "../url/url";
import { useNavigate } from "react-router-dom";
function Editcustomer() {
  const{id}=useParams()
  const navigate=useNavigate()
  console.log(id);
  const[customer,setcustomer]=useState({
    name:"",
    address:"",
    contact:"",
    GST:""
  })
  useEffect(() => {
    axios.get(`${API_URL_GET_CUST}/${id}`)
      .then((res) => {
        setcustomer(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id])

  function handle_edit() {
    axios.put(`${API_URL_PUT_CUST}/${id}`,customer)
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
    navigate("/Viewcustomer")
  }
   
    return(<>
    <center><h3>CUSTOMER DETAILS</h3></center>     
      <form id="form">
     <span>Name:</span>
     <input type="text"
            value={customer.name}
            onChange={(e)=>{setcustomer({...customer,name:e.target.value})}}/>
     <br/><br/>
      <span>Address:</span>
     <textarea rows={3} cols={20}
            value={customer.address}
            onChange={(e)=>{setcustomer({...customer,address:e.target.value})}}/>

      <br/><br/>
      <span>Contact:</span>
     <input type="text"
            value={customer.contact}
            onChange={(e)=>{setcustomer({...customer,contact:e.target.value})}}/>

      <br/><br/>
      <span>GST:</span>
     <input type="text"
            value={customer.GST}
            onChange={(e)=>{setcustomer({...customer,GST:e.target.value})}}/>

      <br/><br/>
     <button onClick={handle_edit} id="button1">Update</button>
     </form>
     
    </>)
}
export default Editcustomer