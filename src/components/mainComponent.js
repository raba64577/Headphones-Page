import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBluetoothB } from "@fortawesome/free-brands-svg-icons";
import {
  faCheck,
  faSync,
  faPenNib,
  faCodeBranch,
  faWeightHanging,
  faMicrophone,
  faAngleLeft,
  faAngleRight,
  faUser,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./headerComponent";
import Footer from "./footerComponent";
import Headphones from "../assets/images/large-headphone.png";
import yellowHeadphones from "../assets/images/yellow-headphones.png";
import pinkHeadphones from "../assets/images/pink-headphones.png";


class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <section id="design-by">
          <div class="container">
            <div class="design-container box-shadow-down">
              <div class="info-section">
                <div class="bg-container">
                  <img src={Headphones} class="bg-image" />
                  <h5>Design by:</h5>
                  <h3>Headphone</h3>
                  <ul class="info-list">
                    <li>
                      <span class="circle">
                        <FontAwesomeIcon className="fas" icon={faCheck} />
                      </span>
                      4 hours of playtime on one charge
                    </li>
                    <li>
                      <span class="circle">
                        <FontAwesomeIcon className="fas" icon={faCheck} />
                      </span>
                      Intuitive touch interface with microphone
                    </li>
                    <li>
                      <span class="circle">
                        <FontAwesomeIcon className="fas" icon={faCheck} />
                      </span>
                      High quality sound
                    </li>
                  </ul>
                  <a href="#" class="box-shadow-down white-btn">
                    Learn More
                  </a>
                </div>
              </div>
              <div class="icon-section">
                <div class="refresh-circle box-shadow-center">
                  <FontAwesomeIcon className="fas" icon={faSync} />
                </div>
                <div class="icon-box">
                  <FontAwesomeIcon className="fas" icon={faPenNib} />
                  <div class="title">Design</div>
                </div>
                <div class="icon-box">
                  <FontAwesomeIcon className="fas" icon={faCodeBranch} />
                  <div class="title">Cord</div>
                </div>
                <div class="icon-box">
                  <FontAwesomeIcon className="fas" icon={faWeightHanging} />
                  <div class="title">Weight</div>
                </div>
                <div class="icon-box">
                  <FontAwesomeIcon className="far" icon={faHandPointUp} />
                  <div class="title">Device Controls</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="color-collection">
          <div class="container">
            <div class="left-side">
              <img src={Headphones} alt="" />
            </div>
            <div class="right-side">
              <div class="col-1">
                <div class="swatch-area box-shadow-center">
                  <div class="circle box-shadow-down"></div>
                  <div class="circle box-shadow-down"></div>
                  <div class="circle box-shadow-down"></div>
                </div>
                <div class="info-box box-shadow-center">
                  <h2>
                    <span class="orange">The</span>
                    <span class="blue">Color</span>
                    <span class="purple">Collection</span>
                  </h2>
                  <p>Let the world in with one quick gesture</p>
                  <a href="#">Explore</a>
                  <div class="line"></div>
                </div>
              </div>
              <div class="col-2">
                <div class="color-slider">
                  <div class="picker box-shadow-center"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="blue-print">
          <div class="container">
            <div class="left-side">
              <img src={yellowHeadphones} alt="" />
            </div>
            <div class="right-side">
              <h1>
                Streamlined,
                <br />
                on-ear wearing
                <br />
                style
              </h1>
              <div class="info-box">
                <div class="col-1">
                  <div class="icon-container">
                    <div class="dashed-circle"></div>
                    <FontAwesomeIcon className="fab" icon={faBluetoothB} />
                  </div>
                </div>
                <div class="col-2">
                  <h3>Bluetooth</h3>
                  <p>Bluetooth 4.2 AAC codec</p>
                  <a href="#">Learn More</a>
                </div>
              </div>
              <div class="info-box">
                <div class="col-1">
                  <div class="icon-container">
                    <div class="dashed-circle"></div>
                    <FontAwesomeIcon className="fas" icon={faMicrophone} />
                  </div>
                </div>
                <div class="col-2">
                  <h3>Microphone</h3>
                  <p>Supports Apple Siri and Google</p>
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="latest">
          <div class="container">
            <div class="header">
              <h1>Our latest headphones</h1>
              <div class="directions">
                <div class="move-left">
                  <FontAwesomeIcon className="fas" icon={faAngleLeft} />
                </div>
                <div class="move-right">
                  <FontAwesomeIcon className="fas" icon={faAngleRight} />
                </div>
              </div>
            </div>
            <div class="body">
              <div class="column">
                <div class="bg-square">
                  <img src={pinkHeadphones} alt="" />
                  <div class="cart">
                    <FontAwesomeIcon className="fas" icon={faCartPlus} />
                  </div>
                </div>
                <div class="line"></div>
                <div class="price">$400</div>
              </div>
              <div class="column">
                <div class="bg-square">
                  <img src={pinkHeadphones} alt="" />
                  <div class="cart">
                    <FontAwesomeIcon className="fas" icon={faCartPlus} />
                  </div>
                </div>
                <div class="line"></div>
                <div class="price">$400</div>
              </div>
              <div class="column">
                <div class="bg-square">
                  <img src={pinkHeadphones} alt="" />
                  <div class="cart">
                    <FontAwesomeIcon className="fas" icon={faCartPlus} />
                  </div>
                </div>
                <div class="line"></div>
                <div class="price">$400</div>
              </div>
            </div>
            <div class="footer">
              <img src={Headphones} alt="" />
              <div class="info-box">
                <h2>Say Hello to Us</h2>
                <form>
                  <div class="input-area box-shadow-down">
                    <FontAwesomeIcon className="fas" icon={faUser} />
                    <input
                      type="text"
                      name="fname"
                      placeholder="Write your name"
                    />
                  </div>
                  <div class="input-area box-shadow-down">
                    <FontAwesomeIcon className="far" icon={faEnvelope} />
                    <input
                      type="email"
                      name="email"
                      placeholder="Write your email"
                    />
                    <button type="submit" name="button">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
export default Main;
