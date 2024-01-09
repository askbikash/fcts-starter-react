import React from 'react'

const Header = () => {
  return (
    <section class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <ul class="contact-info">
              <li><span class="contact-span"><img src="Images/call-icon.svg" alt="" /></span><a
                href="#">+91-011-4248XXXX</a></li>
              <li>|</li>
              <li><span class="contact-span"><img src="Images/envelope-fill.svg" alt="" /></span><a
                href="mailto:info@forwardcode.in">info@forwardcode.in</a></li>
            </ul>
          </div>
          <div class="col-lg-5 social-icon">
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