import React, { useEffect, useState } from "react";
import { FcStackOfPhotos } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom"; // useNavigate qo‘shildi
import { FaDownload, FaHeart } from "react-icons/fa";
import { useGlobalContext } from "../hook/useGlobalContext";
import { signOut } from "firebase/auth"; 
import { auth } from "../Firebase/FireBaseConfig";

const themeFromLocalStorage = () => {
  return localStorage.getItem("theme") || "winter";
};

function Navbar() {
  const { likedImages, downloadedImages, user, dispatch } = useGlobalContext();
  const [theme, setTheme] = useState(themeFromLocalStorage());
  const navigate = useNavigate(); // 🔥 navigate qo‘shildi

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "winter" ? "dracula" : "winter"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch({ type: "LOGOUT" }); // Global context tozalash
      navigate("/login"); // 🔥 Logout bo‘lgandan keyin login sahifasiga yo‘naltiramiz
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="bg-base-200 container mx-auto">
      <div className="navbar bg-base-100 p-4 flex items-center justify-between">
        <div className="navbar-start">
          <Link to="/" className="hidden md:flex items-center">
            <FcStackOfPhotos className="w-8 h-8" />
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="navbar-end flex gap-7 items-center">
          <Link to="/dowloadImg">
            <div className="indicator">
              <span className="indicator-item badge badge-sm badge-secondary">
                {downloadedImages}
              </span>
              <FaDownload className="h-8 w-8" />
            </div>
          </Link>

          <Link to="/likedImages">
            <div className="indicator">
              <span className="indicator-item badge badge-sm badge-secondary">
                {likedImages.length}
              </span>
              <FaHeart className="h-8 w-8" />
            </div>
          </Link>

          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "dracula"}
            />
            <svg className="swap-on h-10 w-10 fill-current" viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17Z..." />
            </svg>
            <svg className="swap-off h-10 w-10 fill-current" viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08..." />
            </svg>
          </label>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ">
                {user && user.photoURL ? (
                  <img src={user.photoURL} alt={(user.displayName || "User") + " avatar"} />
                ) : (
                  <img src="/default-avatar.png" alt="Default avatar" />
                )}
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li><a>Settings</a></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
