import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <h2>
            <span>Comfort</span> and Materials
          </h2>
          <ul className="menu">
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Gallery</a>
            </li>
            <li>
              <a href="/">Tech Spec</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
          </ul>
          <p>&#9400; Apple. All rights reserved.</p>
          <ul className="social-media">
            <li>
              <a href="/" target="new">
                <FontAwesomeIcon className="fab" icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a href="/" target="new">
                <FontAwesomeIcon className="fab" icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="/" target="new">
                <FontAwesomeIcon className="fab" icon={faGoogle} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
