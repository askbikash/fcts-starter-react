import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const MainHeader = () => {
  const lockScroll = () => {
    document.body.classList.toggle('lock-scroll');
  };

  const location = useLocation();

  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav__menu a');

    navLinks.forEach((link) => {
      // Check for exact match in a case-sensitive manner
      if (location.pathname === link.getAttribute('href')) {
        link.parentElement.classList.add('active');
      } else {
        link.parentElement.classList.remove('active');
      }
    });
  }, [location.pathname]);

  useEffect(() => {

    // Prevent showing animation on window resize
    let resizeTimer;
    const handleResize = () => {
      document.body.classList.add('resize-animation-stopper');
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
      }, 400);
    };

    window.addEventListener('resize', handleResize);

    // Menu toggle on mobile
    const navToggle = document.querySelector('.nav-toggle');
    const menuToggle = document.querySelector('.menu-toggle');

    const handleNavToggle = (e) => {
      navToggle.classList.toggle('open');
      menuToggle.classList.toggle('active');
      e.stopPropagation();
    };

    navToggle.addEventListener('click', handleNavToggle);

    // Dropdown toggle on mobile
    const dropdown = document.querySelector('.dropdown a');

    const handleDropdownToggle = (e) => {
      dropdown.nextElementSibling.classList.toggle('show');
      dropdown.parentNode.classList.toggle('active');
      e.stopPropagation();
    };

    dropdown.addEventListener('click', handleDropdownToggle);

    // Second level dropdown toggle on mobile
    const deepDropdown = document.querySelector('.second-level a');

    const handleDeepDropdownToggle = (e) => {
      deepDropdown.nextElementSibling.classList.toggle('show');
      deepDropdown.parentNode.classList.toggle('active');
      e.stopPropagation();
    };

    deepDropdown.addEventListener('click', handleDeepDropdownToggle);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      navToggle.removeEventListener('click', handleNavToggle);
      dropdown.removeEventListener('click', handleDropdownToggle);
      deepDropdown.removeEventListener('click', handleDeepDropdownToggle);
    };
  }, []);

  useEffect(() => {
    const header = document.querySelector('.header');
    const headerTop = document.querySelector('.header-top');

    const headerTopHeight = headerTop.offsetHeight;

    function updateHeader() {
      if (window.scrollY >= headerTopHeight) {
        header.classList.add('fixed-top');
      } else {
        header.classList.remove('fixed-top');
      }
    }

    // Initial update
    updateHeader();

    // Listen for scroll events
    window.addEventListener('scroll', updateHeader);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', updateHeader);
    };
  }, []);

  return (
    <header className="header fixed-top">
      <div className="container">
        <div className="nav__container">
          <div className="nav__mobile">
            <div className="nav__logo">
              <NavLink to="/">
                <img src="Images/forwardcode_logo.png" alt="logo" />
              </NavLink>
            </div>
            <div className="nav__btn" onClick={lockScroll}>
              <a
                aria-label="Mobile menu"
                className="nav-toggle"
                onClick={lockScroll}
              >
                <span></span>
                <span className="mrg"></span>
                <span className="mrg"></span>
              </a>
            </div>
          </div>
          <nav className="menu-toggle">
            <ul className="nav__menu">
              <li>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/AboutUs" activeClassName="active">About Us</NavLink>
              </li>
              <li className="dropdown">
                <a href="#">Services</a>
                <ul>
                  <li><NavLink to="/Services" activeClassName="active">Service 1</NavLink></li>
                  <li><NavLink to="/Services" activeClassName="active">Service 2</NavLink></li>
                  <li><NavLink to="/Services" activeClassName="active">Service 3</NavLink></li>
                  <li className="dropdown second-level">
                    <a href="#">Service 4</a>
                    <ul>
                      <li><NavLink to="/Services" activeClassName="active">Service 4.1</NavLink></li>
                      <li><NavLink to="/Services" activeClassName="active">Service 4.2</NavLink></li>
                      <li><NavLink to="/Services" activeClassName="active">Service 4.3</NavLink></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/ContactUs" activeClassName="active">Contact Us</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
