import React from 'react'

const Header = () => {
  return (
    <section className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <ul className="contact-info">
              <li><span className="contact-span"><img src="Images/call-icon.svg" alt="" /></span><a
                href="#">+91-011-4248XXXX</a></li>
              <li>|</li>
              <li><span className="contact-span"><img src="Images/envelope-fill.svg" alt="" /></span><a
                href="mailto:info@forwardcode.in">info@forwardcode.in</a></li>
            </ul>
          </div>
          <div className="col-lg-5 social-icon">
            <img src="Images/twitter-x.svg" alt="" />
            <img src="Images/instagram.svg" alt="" />
            <img src="Images/facebook.svg" alt="" />
            <img src="Images/linkedin.svg" alt="" />
            <img src="Images/github.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header