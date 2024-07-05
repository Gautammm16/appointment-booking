import React from 'react'
import "../layout.css"
import {Link} from "react-router-dom"

const userMenu =[
    {
        name:"Home",
        path:"/",
        icon:'ri-home-line'
    },
    {
        name:"Appointments",
        path:"/appointments",
        icon:'ri-file-list-line'
    },
    {
        name:"Apply Doctor ",
        path:"/apply-doctor",
        icon:'ri-hospital-line'
    },
    {
        name:"Profile ",
        path:"/profile",
        icon:''
    },
    {
        name:"Logout ",
        path:"/logout",
        icon:''
    },
];

const menuToBeRendered = userMenu;

function Layout({children}) {
  return (
    <div className='main'>
            <div className="d-flex layout">
                <div className="sidebar">
                    <div className="siderbar-header">
                        <h1>SH</h1>
                    </div>
                    <div className="menu">
                        {menuToBeRendered.map((menu)=>{
                            return <div className='d-flex'>
                                <i clas={menu.icon}></i>
                               <Link to={menu.name}>{menu.name}</Link>
                            </div>
                        })}
                    </div>
                </div>
                <div className="content">
                    <div className="header">
                            header
                    </div>
                    <div className="body">
                            {children}
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Layout