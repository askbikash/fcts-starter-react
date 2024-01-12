import React from 'react'
import { NavLink } from 'react-router-dom'

const BreadcrumpServices = () => {
    return (
        <section className="myBreadcrumb">
            <div className="container">
                <nav className="myCenter" style={{ '--bs-breadcrumb-divider': '>' }} aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page"> / Services</li>
                        <li className="breadcrumb-item active" aria-current="page"> / Services 1</li>
                    </ol>
                </nav>
                <h2 className="heading-about name text-center pt-3">Services</h2>
            </div>
        </section>
    )
}

export default BreadcrumpServices