import React from "react";
import logo from "../sources/logo_sprite.svg";

export default function Header() {
  return (
    <div>
      <header>
        <div className="wrapper">
          <div className="logo">
            <img
              src={logo}
              alt="logo"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <h1>Valery Beskor</h1>
          <nav className="navBar">
            <ul>
              <li>Home</li>
              <li>Hard Skills</li>
              <li>Soft Skills</li>
              <li>Expirience</li>
              <li>Contacts</li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
