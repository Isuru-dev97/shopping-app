import React from "react";
import Container from "../Container";
import { NavLink } from "react-router-dom";
import img from "../header/logo.png";

function Navbar() {
  return (
    <Container>
      <div className="content-wrapper md:flex flex-row bg-white justify-between h-72px max-w-1150px p-1">
        <div className="logo">
          <img className="w-20 p-0 m-0" src={img} alt="" />
        </div>
        <div className="nav-item">
          <ul className=" inline-block ">
            <li className=" inline-block p-3 font-semibold ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "underline" : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li className=" inline-block p-3 font-semibold">
              <NavLink
                to="deals"
                className={({ isActive }) =>
                  isActive ? "underline" : undefined
                }
              >
                Deals
              </NavLink>
            </li>
            <li className=" inline-block p-3 font-semibold">
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive ? "underline" : undefined
                }
              >
                About Us
              </NavLink>
            </li>
            <li className=" inline-block p-3 font-semibold">
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive ? "underline" : undefined
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navigation">
          <ul className=" inline-block">
            <li className=" inline-block p-3">
              <input type="text" placeholder="Search..." />
            </li>
          </ul>
        </div>
        <div className="for-register">
          <ul className=" inline-block">
            <li className=" inline-block p-3">
              <a href="">Sign Up</a>
            </li>
            <li className=" inline-block p-3">
              <a className=" inline-block" href="">
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
