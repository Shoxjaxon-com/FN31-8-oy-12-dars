import React, { useEffect, useState } from "react";
import { FcStackOfPhotos } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "winter" ? "dracula" : "winter"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleLogout = async () => {
    try {
      if (!auth) {
        console.error("Firebase auth obyektini import qilishda muammo bor.");
        return;
      }
      if (!user) {
        console.warn("Foydalanuvchi allaqachon tizimdan chiqib ketgan.");
        return;
      }
      await signOut(auth);
      console.log("User successfully logged out");

      dispatch({ type: "LOGOUT" }); // GlobalContext orqali foydalanuvchini null qilish
      localStorage.removeItem("userToken");
      navigate("/login");
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

        <div className="navbar-end flex gap-7 items-center">
          <Link to="/downloadImg">
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
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {user && user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={(user.displayName || "User") + " avatar"}
                  />
                ) : (
                  <img src="/default-avatar.png" alt="Default avatar" />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
