import React, { Component } from "react";
import Headphones from "../assets/images/large-headphone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  render() {
    return (
      <section id="top-jumbo">
        <header>
          <div className="container-fluid">
            <div className="logo">
              <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/030932d3-8fd0-44d9-b238-639b2d366e55/d3g51r9-8905ea1e-fa89-48dd-bf6b-b4145b9260a7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMDMwOTMyZDMtOGZkMC00NGQ5LWIyMzgtNjM5YjJkMzY2ZTU1XC9kM2c1MXI5LTg5MDVlYTFlLWZhODktNDhkZC1iZjZiLWI0MTQ1YjkyNjBhNy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.qFB3aU3q-3WvOTsKpRIKld2HN-6UXkbTqeHBn6jvAVc" />
            </div>
            <div className="menu">
              <a href="#">Features</a>
              <a href="#">Gallery</a>
              <a href="#">Tech Spec</a>
              <a href="#">Support</a>
            </div>
            <div className="header-buttons ">
              <a href="#" className="blue-btn box-shadow-down">
                Showbag{' '} <FontAwesomeIcon className="fas" icon={faShoppingBag} />
              </a>

              <a href="#" className="orange-btn box-shadow-down">
                Sign Up
              </a>
            </div>
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
                You simply won't want to take them off. And with up to 30 hours
                of playtime you won't have to.
              </p>
              <form className="email-area box-shadow-down">
                <FontAwesomeIcon className="far" icon={faEnvelope} />
                <input
                  type="email"
                  name="email"
                  placeholder="Write your email"
                />
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
  }
}

export default Header;
