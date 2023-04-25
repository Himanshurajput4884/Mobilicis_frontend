import React, { useState } from 'react';
import {
    FaBars,
    FaRegChartBar,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./sidebar.css";


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"User Income < $5",
            icon:<FaRegChartBar/>
        },
        {
            path:"/type/2",
            name:"Male User have...",
            icon:<FaRegChartBar/>
        },
        {
            path:"/type/3",
            name:"User Last Name...",
            icon:<FaRegChartBar/>
        },
        {
            path:"/type/4",
            name:"User have car...",
            icon:<FaRegChartBar/>
        },
        {
            path:"/type/5",
            name:"Top 10 cities...",
            icon:<FaRegChartBar/>
        },
    ]
    return (
        <div className="container" style={{"margin": "0", "padding-left": "0"}}>
           <div style={{width: isOpen ? "300px" : "60px", margin: isOpen?"0 0 0 0":"0 20px 0 0"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Mobilicis</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active" style={{textDecoration:"none"}}>
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