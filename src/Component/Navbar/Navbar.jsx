import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <h1>This is the homepage</h1>
      <h2>User can select any of the below link</h2>
      <div className="App_Links">
        <div>
          <Link to="/mystery">Mystery</Link>
        </div>
        <div>
          <Link to="/mythology">Mythology</Link>
        </div>
        <div>
          <Link to="/history">History</Link>
        </div>
        <div>
          <Link to="/technical">Technical</Link>
        </div>
      </div>
    </div>
  );
}
