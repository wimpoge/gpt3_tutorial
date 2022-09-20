import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
        Do you want to step in to the future before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus blanditiis minus impedit dolorem iste ducimus.
          </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Location</p>
          <p>0812-000000</p>
          <p>Contact@payme.net</p>
        </div>
      </div>
      <div />
      <div className="gpt3__footer-copyright">
        <p>Copyright 2022. All rights reserved</p>

      </div>
    </div>
  );
};

export default Footer;
