import React from "react";
import instagram from "../../../public/img/instagram_icon.png";
import github from "../../../public/img/github_icon.png";

const Footer = () => {
  return (
    <div className="bthsTech__footer">
      <div className="bthsTech__footer-content">
        <div className="bthsTech__footer-content_container">
          <div className="bthsTech__footer-content_container_title">
            <h1>Socials</h1>
          </div>
          <div className="bthsTech__footer-content_container_socials">
            <a href="https://www.instagram.com/bthssoftware/">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="https://github.com/orgs/BTHS-Tech/">
              <img src={github} alt="github" />
            </a>
            <a href="https://www.google.com">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// Icons can be found here https://www.iconfinder.com/
