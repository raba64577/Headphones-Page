import React, { useState, useEffect } from "react";
import Headphones from "../assets/images/large-headphone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "hamburger-react";
import { useLockBodyScroll } from "react-use";

import NavMenu from "./navMenu";

const Header = ({viewportWidth}) => {
  // for the hamburger nav menu button
  const [showNavBtn, setShowNavBtn] = useState(false);

  // for the Hamburger-React icon component
  const [isOpen, setOpen] = useState(false);

  const [openNavMenu, setOpenNavMenu] = useState(false);
  // pass this to each link so that the menu will close when you click on a link
  const closeNavMenu = () => setOpenNavMenu(false);

  useEffect(() => {
    // begin to show the hamburger nav menu
    if (`${viewportWidth}` <= 900) {
      setShowNavBtn(true);
    } else {
      // otherwise show regular horizontal nav menu
      setShowNavBtn(false);
    }
  }, [viewportWidth]);

  // to prevent vertical scroll when the hamburger nav menu is open
  useLockBodyScroll(openNavMenu);

  return (
    <section id="top-jumbo">
      <header>
        <div className="container-fluid">
          <div className="logo">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/030932d3-8fd0-44d9-b238-639b2d366e55/d3g51r9-8905ea1e-fa89-48dd-bf6b-b4145b9260a7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMDMwOTMyZDMtOGZkMC00NGQ5LWIyMzgtNjM5YjJkMzY2ZTU1XC9kM2c1MXI5LTg5MDVlYTFlLWZhODktNDhkZC1iZjZiLWI0MTQ1YjkyNjBhNy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.qFB3aU3q-3WvOTsKpRIKld2HN-6UXkbTqeHBn6jvAVc"
              alt="logo"
            />
          </div>

          {showNavBtn && (
            <Fade
              label="Show hamburger nav menu"
              // toggled={isOpen}
              // toggle={setOpen}
              onToggle={() => setOpenNavMenu(!openNavMenu)}
            />
          )}
          {openNavMenu && (
            <NavMenu
              openNavMenu={openNavMenu}
              setOpen={setOpen}
              closeNavMenu={closeNavMenu}
            />
          )}
          {viewportWidth >= 901 && (
            <>
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
                  Showbag{" "}
                  <FontAwesomeIcon className="fas" icon={faShoppingBag} />
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
            </>
          )}
        </div>
      </header>
      <div className="container">
        <div className="left-side">
          <div className="large-number">B3</div>
          <div className="info-container">
            <h1>
              Premium Headphones <br />
              In Your Ears
            </h1>
            <p>
              You simply won't want to take them off. And with up to 30 hours of
              playtime you won't have to.
            </p>
            <form className="email-area box-shadow-down">
              <FontAwesomeIcon className="far" icon={faEnvelope} />
              <input type="email" name="email" placeholder="Write your email" />
              <button type="submit" name="button">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="right-side">
          <img src={Headphones} />
        </div>
      </div>
    </section>
  );
};

export default Header;
