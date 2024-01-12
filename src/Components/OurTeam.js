import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const OurTeam = () => {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 1000
    });
  }, []);
  return (
    <section className="ourTeam overflow-hidden">
      <div className="container">
        <h1 className="mb-5 text-center">Our Team</h1>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-3 mb-5">
            <img className="dp" src="Images/pic1.jpg" alt="" />
            <h4 className="text-center mt-2">Name 1</h4>
            <div className="myicons text-center">
              <img src="Images/twitter-x-2.svg" alt="" />
              <img src="Images/instagram-2.svg" alt="" />
              <img src="Images/facebook-2.svg" alt="" />
              <img src="Images/linkedin-2.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-3 mb-5">
            <img className="dp" src="Images/pic2.jpg" alt="" />
            <h4 className="text-center mt-2">Name 2</h4>
            <div className="myicons text-center">
              <img src="Images/twitter-x-2.svg" alt="" />
              <img src="Images/instagram-2.svg" alt="" />
              <img src="Images/facebook-2.svg" alt="" />
              <img src="Images/linkedin-2.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-3 mb-5">
            <img className="dp" src="Images/pic3.jpg" alt="" />
            <h4 className="text-center mt-2">Name 3</h4>
            <div className="myicons text-center">
              <img src="Images/twitter-x-2.svg" alt="" />
              <img src="Images/instagram-2.svg" alt="" />
              <img src="Images/facebook-2.svg" alt="" />
              <img src="Images/linkedin-2.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-3 mb-5">
            <img className="dp" src="Images/pic1.jpg" alt="" />
            <h4 className="text-center mt-2">Name 4</h4>
            <div className="myicons text-center">
              <img src="Images/twitter-x-2.svg" alt="" />
              <img src="Images/instagram-2.svg" alt="" />
              <img src="Images/facebook-2.svg" alt="" />
              <img src="Images/linkedin-2.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-3 mb-5">
            <img className="dp" src="Images/pic2.jpg" alt="" />
            <h4 className="text-center mt-2">Name 5</h4>
            <div className="myicons text-center">
              <img src="Images/twitter-x-2.svg" alt="" />
              <img src="Images/instagram-2.svg" alt="" />
              <img src="Images/facebook-2.svg" alt="" />
              <img src="Images/linkedin-2.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-3 mb-5">
            <img className="dp" src="Images/pic1.jpg" alt="" />
            <h4 className="text-center mt-2">Name 6</h4>
            <div className="myicons text-center">
              <img src="Images/twitter-x-2.svg" alt="" />
              <img src="Images/instagram-2.svg" alt="" />
              <img src="Images/facebook-2.svg" alt="" />
              <img src="Images/linkedin-2.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-3 mb-5">
            <img className="dp" src="Images/pic3.jpg" alt="" />
            <h4 className="text-center mt-2">Name 7</h4>
            <div className="myicons text-center">
              <img src="Images/twitter-x-2.svg" alt="" />
              <img src="Images/instagram-2.svg" alt="" />
              <img src="Images/facebook-2.svg" alt="" />
              <img src="Images/linkedin-2.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-3 mb-5">
            <img className="dp" src="Images/pic1.jpg" alt="" />
            <h4 className="text-center mt-2">Name 8</h4>
            <div className="myicons text-center">
              <img src="Images/twitter-x-2.svg" alt="" />
              <img src="Images/instagram-2.svg" alt="" />
              <img src="Images/facebook-2.svg" alt="" />
              <img src="Images/linkedin-2.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeam