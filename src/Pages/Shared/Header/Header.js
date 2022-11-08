import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  // console.log(user);

  const handleLogOut = () => {
    logout()
      .then((result) => {
        const user = result.user;
        // console.log(user);
        // navigate("/");
      })
      .catch((error) => console.error(error));
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        {user?.uid ? (
          <>
            <p className="font-semibold">
              <Link to="/review">Review</Link>{" "}
            </p>
          </>
        ) : (
          <></>
        )}
        ;{/* <Link to="/login">Login</Link> */}
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Logout</a>
      </div> */}
      <div className="navbar-end">
        <>
          {user?.uid ? (
            <>
              <span className="text-2xl sm:block hidden">
                {user?.displayName}
              </span>
              <div className="dropdown dropdown-end bg-inherit">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt="" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-sky-200  rounded-box w-52"
                >
                  <li>
                    <Link to="/profile" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link>Settings</Link>
                  </li>
                  <li>
                    <button variant="light" onClick={handleLogOut}>
                      Log out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link className="btn btn-dark" to="/login">
                Login
              </Link>
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default Header;
