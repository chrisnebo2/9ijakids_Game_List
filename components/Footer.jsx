import React from "react";
import "../src/css/Footer.css";
import brand_logo_white from "../src/images/logo-white.png";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="section1">
          <div className="column">
            <div className="brand">
              <a href="">
                <img
                  className="brand_logo"
                  src={brand_logo_white}
                  alt="9IJAKIDS LOGO"
                />
                <p className="brand_name">9IJAKIDS</p>
              </a>
            </div>
            <a href="" className="address">
              <i className="fa-solid fa-location-dot" />
              <p>9ijakids Lane, Lagos</p>
            </a>
            <a href="" className="email">
              <i className="fa-solid fa-envelope" />
              <p>9ijakids@test.com</p>
            </a>
            <a href="" className="phone">
              <i className="fa-solid fa-phone" />
              <p>phone 9ijakids</p>
            </a>
          </div>
          <div className="column">
            <h4>Community</h4>
            <a href="">Learners</a>
            <a href="">Partners</a>
            <a href="">Developers</a>
            <a href="">Beta Testers</a>
            <a href="">Translators</a>
            <a href="">Blog</a>
            <a href="">Tech Blog</a>
            <a href="">Teaching Center</a>
          </div>
          <div className="column">
            <h4>Informations</h4>
            <a href="">About</a>
            <a href="">Pricing</a>
            <a href="">Blog</a>
            <a href="">Careers</a>
            <a href="">Contact</a>
          </div>
          <div className="column">
            <h4>More</h4>
            <a href="">Press</a>
            <a href="">Investors</a>
            <a href="">Terms</a>
            <a href="">Privacy</a>
            <a href="">Help</a>
            <a href="">Accessibility</a>
            <a href="">Contact</a>
            <a href="">Article</a>
            <a href="">Directory</a>
            <a href="">Affiliates</a>
          </div>
        </div>
        <div className="section2">
          <p>test test</p>
          <div className="social_icons">
            <a href="">
              <i className="fa-brands fa-facebook-f" />
            </a>

            <a href="">
              <i className="fa-brands fa-pinterest" />
            </a>

            <a href="">
              <i className="fa-brands fa-twitter" />
            </a>

            <a href="">
              <i className="fa-brands fa-instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
