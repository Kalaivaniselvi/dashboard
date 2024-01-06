import "./sidebar.css"
import React, { useState } from 'react';
import { BsPersonLinesFill } from "react-icons/bs";
import { FcCustomerSupport } from "react-icons/fc";
import { TbListDetails } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";
import { GoHome } from "react-icons/go";
import {
    FaBars,
    FaUserAlt,
    FaRegChartBar,   
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/Dashboard",
            name:"Dashboard",
            icon:<GoHome />
        },
        {
            path:"/Student",
            name:"Student",
            icon:<FaUserAlt/>
        },
        {
            path:"/View",
            name:"view Student",
            icon:<FaRegChartBar/>
        },
        {
            path:"/Employee",
            name:"Employee",
            icon:<GrUserWorker />

        },
        {
            path:"/viewemployee",
            name:"View Employee",
            icon:<BsPersonLinesFill />
        },
        {
            path:"/Customer",
            name:"Customer",
            icon:<FcCustomerSupport />

        },
        {
            path:"/Viewcustomer",
            name:"View customer",
            icon:<TbListDetails />
        },
    ]
    return (
        <div className="sidebar1">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Menu</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;