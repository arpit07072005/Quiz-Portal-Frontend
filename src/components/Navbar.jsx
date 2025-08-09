import React from 'react'
import { useState } from 'react'
import {PanelLeft, Sun} from 'lucide-react'
import { useLocation} from 'react-router'

function Navbar() {
    const[search,setSearch]=useState("Search for anything..")
    const location = useLocation();
  return (
     <div className="adminnav">
       <div className="headeradmin">
          <PanelLeft/>
          <span className="adminhead">Admin {location.pathname}</span>
       </div>
        <input type="text"  className = "searchbar" value={search} onClick={()=>{setSearch("")}} onChange={(e)=>{setSearch(e.target.value)}}/>
       
       <div className="mode">
          <Sun size="25px"/>
       </div>

      </div>
  )
}

export default Navbar
