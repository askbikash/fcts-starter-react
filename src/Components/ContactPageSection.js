import React from 'react';

const ContactPageSection = () => {
    return (
        <section className="contact" id="contact">
            <div className="container overflow-hidden">
                <div className="heading text-center">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                        sequi officiis magni aliquid doloribus modi omnis debitis, mollitia fugiat. Assumenda distinctio harum
                        deleniti perspiciatis explicabo saepe nulla neque enim ipsum?
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-7" data-aos="fade-left">
                        <form className="mb-3">
                            <div className="row">
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="col-sm-6">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="5" id="comment" placeholder="Message"></textarea>
                            </div>
                            <button className="btn btn-block" type="submit">
                                Send Now!
                            </button>
                        </form>
                    </div>
                    <div className="col-md-5" data-aos="fade-right">
                        <div style={{ textDecoration: 'none', overflow: 'hidden', maxWidth: '100%', width: '100%', height: '95%' }}>
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
    );
};

export default ContactPageSection;
