import React from 'react';
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Service = () => {
    useEffect(() => {
        AOS.init({
            offset: 150,
            duration: 1000
        });
    }, []);
    return (
        <section id="services" className="section-2">
            <div className="container overflow-hidden">
                <h1 className="text-center m-4">Our Services</h1>
                <p className="ourService mb-5" data-aos="fade-up">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ea ipsam ducimus consequuntur a id
                    necessitatibus quasi iusto? Iusto ratione qui ea laborum aliquam mollitia veritatis possimus sapiente animi
                    iste quia, esse, excepturi id quis, labore perspiciatis. Nostrum animi explicabo dolore vero corrupti repellat
                    deleniti, veniam, at cumque, amet hic eligendi a nihil beatae tenetur neque quasi. Repudiandae consequuntur
                    placeat quibusdam iste nulla libero rerum cumque velit nam nesciunt, dolor quisquam hic molestias laudantium
                    blanditiis. Odio illum impedit, sint sequi possimus in architecto porro sit nam at veritatis enim,
                    voluptatum excepturi esse suscipit laudantium nesciunt incidunt quibusdam, quo magnam assumenda ipsa?
                    Nesciunt ratione nemo repudiandae tempore, odit recusandae laborum placeat, a eum harum ducimus, blanditiis
                    dolorum nulla animi. Atque reprehenderit nostrum sit, sequi quod vitae quos eos, quisquam laboriosam
                    voluptatum commodi facilis in. Sapiente quas eveniet libero iusto consequatur reprehenderit, quo autem animi,
                    cupiditate quibusdam delectus voluptas fugit possimus tempora!
                </p>
                <div className="row row-gap-5">
                    {/* Card 1 */}
                    <div className="col-lg-4">
                        <a className="text-decoration-none text-black" href="services.html">
                            <div className="card h-100 overflow-hidden" data-aos="fade-right">
                                <div className="overflow-hidden">
                                    <img
                                        src="Images/img1.avif"
                                        className="card-img-top"
                                        alt="..."
                                        style={{ transition: 'transform 0.9s' }}
                                        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        <a href="services.html" className="text-decoration-none text-black">
                                            This is a longer card with supporting text below as a natural lead-in to additional content. This
                                            content is a little bit longer.
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Card 2 */}
                    <div className="col-lg-4">
                        <a className="text-decoration-none text-black" href="services.html">
                            <div className="card h-100 overflow-hidden" data-aos="fade-up">
                                <div className="overflow-hidden">
                                    <img
                                        src="Images/img2.avif"
                                        className="card-img-top"
                                        alt="..."
                                        style={{ transition: 'transform 0.9s' }}
                                        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        <a href="services.html" className="text-decoration-none text-black">
                                            This is a longer card with supporting text below as a natural lead-in to additional content. This
                                            content is a little bit longer.
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Card 3 */}
                    <div className="col-lg-4">
                        <a className="text-decoration-none text-black" href="services.html">
                            <div className="card h-100 overflow-hidden" data-aos="fade-left">
                                <div className="overflow-hidden">
                                    <img
                                        src="Images/img3.avif"
                                        className="card-img-top"
                                        alt="..."
                                        style={{ transition: 'transform 0.9s' }}
                                        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        <a href="services.html" className="text-decoration-none text-black">
                                            This is a longer card with supporting text below as a natural lead-in to additional content. This
                                            content is a little bit longer.
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Card 4 */}
                    <div className="col-lg-4">
                        <a className="text-decoration-none text-black" href="services.html">
                            <div className="card h-100 overflow-hidden" data-aos="fade-right">
                                <div className="overflow-hidden">
                                    <img
                                        src="Images/img4.avif"
                                        className="card-img-top"
                                        alt="..."
                                        style={{ transition: 'transform 0.9s' }}
                                        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        <a href="services.html" className="text-decoration-none text-black">
                                            This is a longer card with supporting text below as a natural lead-in to additional content. This
                                            content is a little bit longer.
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Card 5 */}
                    <div className="col-lg-4">
                        <a className="text-decoration-none text-black" href="services.html">
                            <div className="card h-100 overflow-hidden" data-aos="fade-up">
                                <div className="overflow-hidden">
                                    <img
                                        src="Images/img1.avif"
                                        className="card-img-top"
                                        alt="..."
                                        style={{ transition: 'transform 0.9s' }}
                                        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        <a href="services.html" className="text-decoration-none text-black">
                                            This is a longer card with supporting text below as a natural lead-in to additional content. This
                                            content is a little bit longer.
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Card 6 */}
                    <div className="col-lg-4">
                        <a className="text-decoration-none text-black" href="services.html">
                            <div className="card h-100 overflow-hidden" data-aos="fade-left">
                                <div className="overflow-hidden">
                                    <img
                                        src="Images/img2.avif"
                                        className="card-img-top"
                                        alt="..."
                                        style={{ transition: 'transform 0.9s' }}
                                        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        <a href="services.html" className="text-decoration-none text-black">
                                            This is a longer card with supporting text below as a natural lead-in to additional content. This
                                            content is a little bit longer.
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="text-center pt-5 mb-5">
                    <NavLink className="btn btn-warning" to="/Services">
                        Read More..
                    </NavLink>
                </div>
            </div>
        </section >
    );
};

export default Service;
