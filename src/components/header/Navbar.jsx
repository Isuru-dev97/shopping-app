import React from "react";
import Container from "../Container";
import { NavLink, Link } from "react-router-dom";
import img from "../header/logo.png";
import { useSelector } from "react-redux";

function Navbar() {
  const { cartAmount } = useSelector((store) => store.cart);
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
            <li className=" p-3 flex">
              <div>
                <Link to="mycart" activeClassName="current">
                  <img
                    className="w-10 h-8 absolute"
                    src="images/cart.png"
                    alt=""
                  />
                </Link>
                <span className="p-1 bg-black text-white absolute px-2 ml-5 top-1 text-center rounded-full leading-4 min-w-14px border-3 ">
                  {cartAmount}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
