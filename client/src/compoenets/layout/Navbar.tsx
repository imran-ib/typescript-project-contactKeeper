import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

const Navbar: React.FC<NavProp> = ({ title = "Contact Keeper", icon }) => {
  // Example of default prop
  return (
    <div className="navbar bg-primary">
      <h1>
        <FontAwesome
          style={{ paddingRight: "5px" }}
          className="fas fa-user"
          name="card"
        />
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

type NavProp = {
  title?: string;
  icon?: string;
};

export default Navbar;
