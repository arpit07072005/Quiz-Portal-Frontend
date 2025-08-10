import React from "react";

import Navbar from "./Navbar";

function Leaderboard() {
  const results = [
    { email: "john@example.com", name: "John Doe", studentNo: "123456", score: 85 },
    { email: "jane@example.com", name: "Jane Smith", studentNo: "654321", score: 92 },
    { email: "bob@example.com", name: "Bob Johnson", studentNo: "789012", score: 78 },
  ];

  return (
    <div className="leaderboard-container">
      <Navbar/>
      <h1 className="leaderboard-title">Leaderboard</h1>
      <div className="leaderboard-table-wrapper">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Name</th>
              <th>Student No.</th>
              <th>Score</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {results.map((row, index) => (
              <tr key={index}>
                <td>{row.email}</td>
                <td>{row.name}</td>
                <td>{row.studentNo}</td>
                <td>{row.score}</td>
                <td>
                  <button className="btn-view">View</button>
                  <button className="btn-export">Export</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;