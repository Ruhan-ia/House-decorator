import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(() => {});
  };
  return (
    <div className="navbar bg-base-100 z-10 fixed ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block stroke-current h-10 w-10 font-extrabold text-5xl text-green-700"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72 bg-gradient-to-r from-cyan-300 to-pink-300"
          >
            <li>
            <Link to='/'>Home</Link>

            </li>
            <li>
            <Link to='dashBoard/profile'>Dashboard
            <span className="badge badge-secondary">
                  +{cart?.length || 0}
                </span>
            </Link>

             
            </li>
            <li>
            <Link to='/dashBoard/cart'>Cart
            <span className="badge badge-secondary">
                  +{cart?.length || 0}
                </span>
            </Link>

            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-6xl text-green-500 font-roboto font-thin">e<span className="font-bold text-xs text-orange-400 font-italic">web</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-bold   text-green-700 border-b-4 border-b-green-700">
          <Link to='/'>Home</Link>
          </li>
          <li>
           <Link to='dashBoard/profile'>Dashboard
           <span className="badge badge-secondary">
                  +{cart?.length || 0}
                </span></Link>
          </li>
          <li>
          <Link to="dashBoard/cart">Cart
          <span className="badge badge-secondary">
                  +{cart?.length || 0}
                </span></Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
      {user &&  <div className="avatar items-center">
    <div className="w-12 rounded-full">
      <img src={user.photoURL}/>
    </div>
  </div>}
  {user ? (
          <>
            <button
              onClick={handleLogOut}
              className="btn btn-xl hover:bg-black hover:text-white rounded-full  "
            >
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-xl  hover:bg-black hover:text-white rounded-full "
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
