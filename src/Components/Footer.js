import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12">
              <a href="/">
                <img width="100" height="100" src="Images/forwardcode_logo.png" className="footer-img mb-2" alt="Logo" />
              </a>
              <p className="footer-address">
                <strong>FCTS - Starter</strong><br />
                <a href="https://maps.app.goo.gl/5gCrdmK4vvzKStyW6" target="_blank" className="text-decoration-none text-white">
                  5, First Floor,
                  Hirasingh Bagan, Jamshedpur, Jharkhand 831001
                </a>
              </p>
              <ul className="list-inline">
                <li className="m-0 pl-0 pr-0 mb-3">
                  <img src="Images/call-icon.svg" alt="" />
                  <a href="#" className="text-decoration-none text-white">+91-011109399xx</a>
                </li>
                <li className="m-0 pl-0 pr-0 mb-3">
                  <img src="Images/link-45deg.svg" alt="" />
                  <a className="text-decoration-none text-white" href="https://forwardcode.in/" target="_blank">www.forwardcode.in</a>
                </li>
                <li className="m-0 pl-0 pr-0 mb-3">
                  <img src="Images/envelope-fill.svg" alt="" />
                  <a className="text-grey" href="mailto:info@forwardcode.in">info@forwardcode.in</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-12">
              <h3>Links</h3>
              <hr />
              <ul className="footer-ul">
                <li className="footer-li"> <NavLink to="/">Home</NavLink></li>
                <li className="footer-li"> <NavLink to="/about-us">About Us</NavLink></li>
                <li className="footer-li"> <NavLink to="/services">Services</NavLink></li>
                <li className="footer-li"> <NavLink to="/contact-us">Contact Us</NavLink></li>
              </ul>
            </div>
            <div className="col-lg-4 col-12">
              <h3>Contact Us</h3>
              <hr />
              <div style={{ textDecoration: 'none', overflow: 'hidden', maxWidth: '100%', width: '100%', height: '90%' }}>
                <div id="embed-ded-map-canvas" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
                  <iframe
                    style={{ height: '100%', width: '100%', border: '0' }}
                    frameBorder="0"
                    src="https://www.google.com/maps/embed/v1/place?q=Forwardcode+Techstudio+|+Software+Development+Agency+in+Jamshedpur,+Hirasingh+Bagan,+Kasidih,+Jamshedpur,+Jharkhand,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  ></iframe>
                </div>
                <style>
                  {`
                    #embed-ded-map-canvas img {
                      max-height: none;
                      max-width: none !important;
                      background: none !important;
                    }
                  `}
                </style>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-bottom">
        <div className="container footer-copyright">
          <div className="copyright">
            Copyright © 2023 Starter Pvt Ltd. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
