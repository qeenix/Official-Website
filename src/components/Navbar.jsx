import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-20 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">QeeniX</p>
      </NavLink>
      <nav className="flex text-lg gap-10 font-medium">
        <NavLink to="/legal" className={({isActive})=>isActive ? 'text-blue-400':'text-blue-800'}>
        Legal
        </NavLink>
        <NavLink to="/about" className={({isActive})=>isActive ? 'text-blue-400':'text-blue-800'}>
        About
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
