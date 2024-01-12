import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 1000
    });
  }, []);
  return (
    <section id="testimonials" className="testimonials pt-0 mt-0">
      <div className="container mt-5 mb-5 overflow-hidden" data-aos="zoom-in-down">
        <h1 className="text-center mb-5">Testimonials</h1>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner carousel-myimage myCaro">
            <div className="carousel-item active">
              <div className="row g-2">
                <div className="col-md-4 mx-auto">
                  <div className="card p-3 text-center px-4">
                    <div className="user-image">
                      <img src="Images/testimonials.avif" className="rounded-circle" height="80" width="80" />
                    </div>
                    <div className="user-content">
                      <h5 className="mb-0">Bruce Hardy</h5>
                      <span>Software Developer</span>
                      <p className="mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris
                        nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="ratings">
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mx-auto">
                  <div className="card p-3 text-center px-4">
                    <div className="user-image">
                      <img src="Images/testimonials.avif" className="rounded-circle" height="80" width="80" />
                    </div>
                    <div className="user-content">
                      <h5 className="mb-0">Bruce Hardy</h5>
                      <span>Software Developer</span>
                      <p className="mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris
                        nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="ratings">
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mx-auto">
                  <div className="card p-3 text-center px-4">
                    <div className="user-image">
                      <img src="Images/testimonials.avif" className="rounded-circle" height="80" width="80" />
                    </div>
                    <div className="user-content">
                      <h5 className="mb-0">Bruce Hardy</h5>
                      <span>Software Developer</span>
                      <p className="mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris
                        nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="ratings">
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="carousel-item">
              <div className="row g-2">
                <div className="col-md-4 mx-auto">
                  <div className="card p-3 text-center px-4">
                    <div className="user-image">
                      <img src="Images/testimonials.avif" className="rounded-circle" height="80" width="80" />
                    </div>
                    <div className="user-content">
                      <h5 className="mb-0">Mark Smith</h5>
                      <span>Web Developer</span>
                      <p className="mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris
                        nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="ratings">
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mx-auto">
                  <div className="card p-3 text-center px-4">
                    <div className="user-image">
                      <img src="Images/testimonials.avif" className="rounded-circle" height="80" width="80" />
                    </div>
                    <div className="user-content">
                      <h5 className="mb-0">Bruce Hardy</h5>
                      <span>Software Developer</span>
                      <p className="mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris
                        nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="ratings">
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mx-auto">
                  <div className="card p-3 text-center px-4">
                    <div className="user-image">
                      <img src="Images/testimonials.avif" className="rounded-circle" height="80" width="80" />
                    </div>
                    <div className="user-content">
                      <h5 className="mb-0">Bruce Hardy</h5>
                      <span>Software Developer</span>
                      <p className="mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris
                        nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="ratings">
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row g-2">
                <div className="col-md-4 mx-auto">
                  <div className="card p-3 text-center px-4">
                    <div className="user-image">
                      <img src="Images/testimonials.avif" className="rounded-circle" height="80" width="80" />
                    </div>
                    <div className="user-content">
                      <h5 className="mb-0">Akash Sharma</h5>
                      <span>Software Engineer</span>
                      <p className="mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris
                        nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="ratings">
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mx-auto">
                  <div className="card p-3 text-center px-4">
                    <div className="user-image">
                      <img src="Images/testimonials.avif" className="rounded-circle" height="80" width="80" />
                    </div>
                    <div className="user-content">
                      <h5 className="mb-0">Akash Sharma</h5>
                      <span>Software Engineer</span>
                      <p className="mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris
                        nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="ratings">
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mx-auto">
                  <div className="card p-3 text-center px-4">
                    <div className="user-image">
                      <img src="Images/testimonials.avif" className="rounded-circle" height="80" width="80" />
                    </div>
                    <div className="user-content">
                      <h5 className="mb-0">Akash Sharma</h5>
                      <span>Software Engineer</span>
                      <p className="mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris
                        nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="ratings">
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row g-2">
                <div className="col-md-4 mx-auto">
                  <div className="card p-3 text-center px-4">
                    <div className="user-image">
                      <img src="Images/testimonials.avif" className="rounded-circle" height="80" width="80" />
                    </div>
                    <div className="user-content">
                      <h5 className="mb-0">Bikash Kumar</h5>
                      <span>Software Developer</span>
                      <p className="mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris
                        nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="ratings">
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />

                    </div>
                  </div>
                </div>
                <div className="col-md-4 mx-auto">
                  <div className="card p-3 text-center px-4">
                    <div className="user-image">
                      <img src="Images/testimonials.avif" className="rounded-circle" height="80" width="80" />
                    </div>
                    <div className="user-content">
                      <h5 className="mb-0">Bikash Kumar</h5>
                      <span>Software Developer</span>
                      <p className="mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris
                        nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="ratings">
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />

                    </div>
                  </div>
                </div>
                <div className="col-md-4 mx-auto">
                  <div className="card p-3 text-center px-4">
                    <div className="user-image">
                      <img src="Images/testimonials.avif" className="rounded-circle" height="80" width="80" />
                    </div>
                    <div className="user-content">
                      <h5 className="mb-0">Bikash Kumar</h5>
                      <span>Software Developer</span>
                      <p className="mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris
                        nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="ratings">
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row g-2">
                <div className="col-md-4 mx-auto">
                  <div className="card p-3 text-center px-4">
                    <div className="user-image">
                      <img src="Images/testimonials.avif" className="rounded-circle" height="80" width="80" />
                    </div>
                    <div className="user-content">
                      <h5 className="mb-0">Veera Duncan</h5>
                      <span>Software Architect</span>
                      <p className="mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris
                        nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="ratings">
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mx-auto">
                  <div className="card p-3 text-center px-4">
                    <div className="user-image">
                      <img src="Images/testimonials.avif" className="rounded-circle" height="80" width="80" />
                    </div>
                    <div className="user-content">
                      <h5 className="mb-0">Veera Duncan</h5>
                      <span>Software Architect</span>
                      <p className="mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris
                        nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="ratings">
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mx-auto">
                  <div className="card p-3 text-center px-4">
                    <div className="user-image">
                      <img src="Images/testimonials.avif" className="rounded-circle" height="80" width="80" />
                    </div>
                    <div className="user-content">
                      <h5 className="mb-0">Veera Duncan</h5>
                      <span>Software Architect</span>
                      <p className="mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris
                        nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="ratings">
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                      <img src="Images/star-fill.svg" alt="User" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <a href="#carousel_1" className="carousel-control-prev" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a href="#carousel_1" className="carousel-control-next" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </a>


        </div>
      </div>
    </section>
  )
}

export default Testimonial