import React from 'react'
import {BrainCircuit, CircuitBoard, LayoutDashboard, ShoppingBag, User, WalletCards } from "lucide-react"
import { useNavigate } from 'react-router'


function Header() {
  const navigate = useNavigate();
  


   const handleSelectChange = (e) => {
    if (e.target.value === "users") {
      navigate("/users");
    }
    if (e.target.value === "add-user") {
      navigate("/users/new");
    }
  };
  return (
    <div className = "header">
      <div className="head">
          <BrainCircuit size="15px"/>
          <div className="mlcoename">
            <span className="mlcoe">Mlcoe</span>
            <span className="society">society</span>

          </div>
      </div>
      <div className="headitems">
        <span className = "overview">Overview</span>
        <div className="dashboardhead" onClick={()=>{navigate("/")}}>
            <LayoutDashboard size="15px" color="#020817"/>
            <span>Dashboard</span>
        </div>
        <div className="dashboardhead">
            <User size="15px" color="#020817"/>
        <select className = "user" onChange={handleSelectChange}>
            <option value="">Users</option>
            <option value="users">Users</option>
            <option value="add-user">Add User</option>
        </select>
        </div>
         <div className="dashboardhead">
            <ShoppingBag size="15px" color="#020817"/>
        <select className = "questions">
            <option>Questions</option>
            <option>Questions</option>
            <option>Add Questions</option>
        </select>
        </div>
         <div className="dashboardhead">
            <WalletCards size="15px" color="#020817"/>
        <select className = "quiz">
            <option>Quiz</option>
            <option>Quiz</option>
            <option>Add Quiz</option>
        </select>
        </div>
        <div className="dashboardhead">
            <CircuitBoard size="15px" color="#020817"/>
            <span>Leaderboard</span>
        </div>

      </div>
    </div>
  )
}

export default Header
