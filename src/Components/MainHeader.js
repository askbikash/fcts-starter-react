import React, { useEffect } from 'react';

const MainHeader = () => {
  const lockScroll = () => {
    document.body.classList.toggle('lock-scroll');
  };

  useEffect(() => {
    const currentPage = window.location.pathname;

    // Handle the case where the current page is the homepage
    const adjustedPage = currentPage === '/' ? '/index.html' : currentPage;

    const navLinks = document.querySelectorAll('.nav__menu a');

    for (let i = 0; i < navLinks.length; i++) {
      const link = navLinks[i];

      // Check for partial match
      if (adjustedPage.indexOf(link.getAttribute('href')) !== -1) {
        link.parentElement.classList.add('active');
      }
    }

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
              <a href="index.html">
                <img src="Images/forwardcode_logo.png" alt="logo" />
              </a>
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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="AboutUs">About Us</a>
              </li>
              <li className="dropdown">
                <a href="#">Services</a>
                <ul>
                  <li>
                    <a href="#">Service 1</a>
                  </li>
                  <li>
                    <a href="#">Service 2</a>
                  </li>
                  <li>
                    <a href="#">Service 3</a>
                  </li>
                  <li className="dropdown second-level">
                    <a href="#">Service 4</a>
                    <ul>
                      <li>
                        <a href="#">Service 4.1</a>
                      </li>
                      <li>
                        <a href="#">Service 4.2</a>
                      </li>
                      <li>
                        <a href="#">Service 4.3</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
