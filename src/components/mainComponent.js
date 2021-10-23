import React, { useState } from "react";
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
import ProductColumn from "./productColumn";
import Headphones from "../assets/images/large-headphone.png";
import yellowHeadphones from "../assets/images/yellow-headphones.png";
import pinkHeadphones from "../assets/images/pink-headphones.png";
import otherHeadphones from "../assets/images/Daco_4871547.png";
import useWindowWidth from "../hooks/useWindowWidth";

const SliderData = [
  {
    image: pinkHeadphones,
  },
  {
    image:
      "https://media.idownloadblog.com/wp-content/uploads/2019/10/Beats-Solo-Pro-blue.png",
  },
  {
    image: otherHeadphones,
  },
];

const Main = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  // from the custom hook in the util folder
  let viewportWidth = useWindowWidth(); // returns the current viewport width

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }
console.log("viewportWidth: ", viewportWidth)
  return (
    <>
      <Header viewportWidth={viewportWidth} />
      <section id="design-by">
        <div className="container">
          <div className="design-container box-shadow-down">
            <div className="info-section">
              <div className="bg-container">
                <img src={Headphones} className="bg-image" />
                <h5>Design by:</h5>
                <h3>Headphone</h3>
                <ul className="info-list">
                  <li>
                    <span className="circle">
                      <FontAwesomeIcon className="fas" icon={faCheck} />
                    </span>
                    4 hours of playtime on one charge
                  </li>
                  <li>
                    <span className="circle">
                      <FontAwesomeIcon className="fas" icon={faCheck} />
                    </span>
                    Intuitive touch interface with microphone
                  </li>
                  <li>
                    <span className="circle">
                      <FontAwesomeIcon className="fas" icon={faCheck} />
                    </span>
                    High quality sound
                  </li>
                </ul>
                <a href="#" className="box-shadow-down white-btn">
                  Learn More
                </a>
              </div>
            </div>
            <div className="icon-section">
              <div className="refresh-circle box-shadow-center">
                <FontAwesomeIcon className="fas" icon={faSync} />
              </div>
              <div className="icon-box">
                <FontAwesomeIcon className="fas" icon={faPenNib} />
                <div className="title">Design</div>
              </div>
              <div className="icon-box">
                <FontAwesomeIcon className="fas" icon={faCodeBranch} />
                <div className="title">Cord</div>
              </div>
              <div className="icon-box">
                <FontAwesomeIcon className="fas" icon={faWeightHanging} />
                <div className="title">Weight</div>
              </div>
              <div className="icon-box">
                <FontAwesomeIcon className="far" icon={faHandPointUp} />
                <div className="title">Device Controls</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="color-collection">
        <div className="container">
          <div className="left-side">
            <img src={Headphones} alt="" />
          </div>
          <div className="right-side">
            <div className="col-1">
              <div className="swatch-area box-shadow-center">
                <div className="circle box-shadow-down"></div>
                <div className="circle box-shadow-down"></div>
                <div className="circle box-shadow-down"></div>
              </div>
              <div className="info-box box-shadow-center">
                <h2>
                  <span className="orange">The</span>
                  <span className="blue">Color</span>
                  <span className="purple">Collection</span>
                </h2>
                <p>Let the world in with one quick gesture</p>
                <a href="#">Explore</a>
                <div className="line"></div>
              </div>
            </div>
            <div className="col-2">
              <div className="color-slider">
                <div className="picker box-shadow-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="blue-print">
        <div className="container">
          <div className="left-side">
            <img src={yellowHeadphones} alt="" />
          </div>
          <div className="right-side">
            <h1>
              Streamlined,
              <br />
              on-ear wearing
              <br />
              style
            </h1>
            <div className="info-box">
              <div className="col-1">
                <div className="icon-container">
                  <div className="dashed-circle"></div>
                  <FontAwesomeIcon className="fab" icon={faBluetoothB} />
                </div>
              </div>
              <div className="col-2">
                <h3>Bluetooth</h3>
                <p>Bluetooth 4.2 AAC codec</p>
                <a href="#">Learn More</a>
              </div>
            </div>
            <div className="info-box">
              <div className="col-1">
                <div className="icon-container">
                  <div className="dashed-circle"></div>
                  <FontAwesomeIcon className="fas" icon={faMicrophone} />
                </div>
              </div>
              <div className="col-2">
                <h3>Microphone</h3>
                <p>Supports Apple Siri and Google</p>
                <a href="#">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="latest">
        <div className="container">
          <div className="header">
            <h1>Our latest headphones</h1>
            <div className="directions">
              <div className="move-left" onClick={prevSlide}>
                <FontAwesomeIcon className="fas" icon={faAngleLeft} />
              </div>
              <div className="move-right" onClick={nextSlide}>
                <FontAwesomeIcon className="fas" icon={faAngleRight} />
              </div>
            </div>
          </div>
          <div className="body">
            {viewportWidth <= 506 ? (
              <div className="column">
                <div className="bg-square">
                  <ProductColumn current={current} SliderData={SliderData} />
                  <div className="cart">
                    <FontAwesomeIcon className="fas" icon={faCartPlus} />
                  </div>
                </div>
                <div className="line"></div>
                <div className="price">$400</div>
              </div>
            ) : (
              <>
                <div className="column">
                  <div className="bg-square">
                    <img src={pinkHeadphones} alt="" />
                    <div className="cart">
                      <FontAwesomeIcon className="fas" icon={faCartPlus} />
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="price">$400</div>
                </div>
                <div className="column">
                  <div className="bg-square">
                    <img src={pinkHeadphones} alt="" />
                    <div className="cart">
                      <FontAwesomeIcon className="fas" icon={faCartPlus} />
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="price">$400</div>
                </div>
                <div className="column">
                  <div className="bg-square">
                    <img src={pinkHeadphones} alt="" />
                    <div className="cart">
                      <FontAwesomeIcon className="fas" icon={faCartPlus} />
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="price">$400</div>
                </div>
              </>
            )}
          </div>
          <div className="footer">
            <img src={Headphones} alt="" />
            <div className="info-box">
              <h2>Say Hello to Us</h2>
              <form>
                <div className="input-area box-shadow-down">
                  <FontAwesomeIcon className="fas latest-user" icon={faUser} />
                  <input
                    type="text"
                    name="fname"
                    placeholder="Write your name"
                  />
                </div>
                <div className="input-area box-shadow-down">
                  <FontAwesomeIcon className="far latest-envelope" icon={faEnvelope} />
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
};
export default Main;
