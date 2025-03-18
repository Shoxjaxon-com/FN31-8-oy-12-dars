import React from "react";
import { FcStackOfPhotos } from "react-icons/fc";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function Navbar() {
  return (
    <header className="bg-base-300">
        <div className="navbar bg-base-100 p-4 flex items-center justify-between">
      <div className="navbar-start">
        <Link to="/" className="hidden md:flex items-center">
          <FcStackOfPhotos className="w-8 h-8" />
        </Link>
      </div>

      <div className="hidden md:flex space-x-6">
        <Link to="/">
          Home
        </Link>
        <Link to="/about">
          About
        </Link>
        <Link to="/contact">
          Contact
        </Link>
      </div>

      <div className="dropdown md:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <FcStackOfPhotos className="w-8 h-8" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box shadow-lg w-40 mt-3 p-2"
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

        <div className="navbar-end">
            <Link to='/'>
            <div className="indicator">
        <span className="indicator-item badge badge-sm badge-secondary">0</span>
        <FaHeart  className="h-6 w-6"/>
       </div>
      </Link>
        </div>
    </div>
    </header>
  );
}

export default Navbar;
