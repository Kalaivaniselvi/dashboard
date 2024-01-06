import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Parent_data from "./component/student";
import View from "./component/studentview";
import Sidebar from "./sidebar";
import Editstudent from "./component/studentedit";
import Employee from "./component/employee";
import Employee_View from "./component/employeeview";
import Edit_employee from "./component/employee_edit";
import Customer from "./component/customer";
import Viewcustomer from "./component/customerview";
import Editcustomer from "./component/customer_edit";
import Login from "./component/login";
import Dashboard from "./component/dashboard";

const Main = () => {
  const[show,setshow]=useState(false)
  function handlelogin(){
    setshow(true)
  }
  return (
    <>
          <BrowserRouter>
      { show?(
      <Sidebar>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Student" element={<Parent_data/>} />
          <Route path="/View" element={<View/>} />
          <Route path="/Editstudent/:id" element={<Editstudent/>}/>
          <Route path="/Employee" element={<Employee/>}/>
          <Route path="/Viewemployee" element={<Employee_View/>}/>
          <Route path="/Editemployee/:id" element={<Edit_employee/>}/>
          <Route path="/Customer" element={<Customer/>}/>
          <Route path="/Viewcustomer" element={<Viewcustomer/>}/>
          <Route path="/Editcustomer/:id" element={<Editcustomer/>}/>
          </Routes>
        </Sidebar> ):(
        <Routes>
          <Route path="/" element={<Login  onlogin={handlelogin}/>}/>
       </Routes>)}
      </BrowserRouter>
    </>
  );
};

export default Main;
