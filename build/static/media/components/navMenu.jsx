import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const NavMenu = ({ openNavMenu, closeNavMenu, setOpen }) => {
  return (
    <div className="nav-menu">
      {/* <ul>
      <li
        onClick={() => {
          openNavMenu && closeNavMenu();
          setOpen(false);
        }}
      >
        <a href="/" className="blue-btn box-shadow-down">
          Showbag <FontAwesomeIcon className="fas" icon={faShoppingBag} />
        </a>
      </li>
      <li
        onClick={() => {
          openNavMenu && closeNavMenu();
          setOpen(false);
        }}
      >
        <a href="/" className="orange-btn box-shadow-down">
          Sign Up
        </a>
      </li>
    </ul> */}
      <div className="menu">
        <a href="/">Features</a>
        <a href="/">Gallery</a>
        <a href="/">Tech Spec</a>
        <a href="/">Support</a>
      </div>
      <div className="header-buttons">
        <a
          onClick={() => {
            openNavMenu && closeNavMenu();
            setOpen(false);
          }}
          href="/"
          className="blue-btn box-shadow-down"
        >
          Showbag <FontAwesomeIcon className="fas" icon={faShoppingBag} />
        </a>

        <a
          onClick={() => {
            openNavMenu && closeNavMenu();
            setOpen(false);
          }}
          href="/"
          className="orange-btn box-shadow-down"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default NavMenu;
