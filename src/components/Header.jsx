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
  const handleSelectChange1 = (e) => {
    if (e.target.value === "questions") {
      navigate("/questions");
    }
    if (e.target.value === "add-question") {
      navigate("/questions/new");
    }
  };
  const handlequiz=(e)=>{
     if (e.target.value === "quiz") {
      navigate("/quiz");
    }
    if (e.target.value === "addquiz") {
      navigate("/quiz/new");
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
        <select className = "questions" onChange={handleSelectChange1}>
            <option value="">Questions</option>
            <option value="questions">Questions</option>
            <option value="add-question">Add Questions</option>
        </select>
        </div>
         <div className="dashboardhead">
            <WalletCards size="15px" color="#020817"/>
         <select className = "quiz" onChange={handlequiz}>
            <option value=''>Quiz</option>
            <option value='quiz'>Quiz</option>
            <option value='addquiz'>Add Quiz</option>
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
