import React from 'react';
import { NavLink } from 'react-router-dom';

const Breadcrump = () => {
    return (
        <section className="myBreadcrumb">
            <div className="container">
                <nav className="myCenter" style={{ '--bs-breadcrumb-divider': '>' }} aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </nav>
                <h2 className="heading-about name text-center pt-3">About Our Company</h2>
            </div>
        </section>
    );
};

export default Breadcrump;
