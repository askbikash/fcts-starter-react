import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {
    useEffect(() => {
        AOS.init({
            offset: 150,
            duration: 1000
        });
    }, []);
    return (
        <section className="contact" data-aos="fade-up">
            <div className="container py-4">

                <form id="contactForm">

                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input className="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="emailAddress">Email Address</label>
                        <input className="form-control" id="emailAddress" type="email" placeholder="Email Address"
                            data-sb-validations="required, email" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="message">Message</label>
                        <textarea className="form-control" id="message" type="text" placeholder="Message" style={{ height: '10rem' }}
                            data-sb-validations="required"></textarea>
                    </div>

                    <div className="text-center">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>

                </form>

            </div>
        </section>
    );
}

export default Contact;
