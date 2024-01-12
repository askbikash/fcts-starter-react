import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Hero2 = () => {
    const goToSlide = (index) => {
        const carousel = new window.bootstrap.Carousel(document.getElementById('carouselExampleControls'));
        carousel.to(index);
    };

    useEffect(() => {
        const indicators = document.querySelectorAll('.custom-indicator');
        const carousel = new window.bootstrap.Carousel(document.getElementById('carouselExampleControls'));

        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                goToSlide(index);
            });
        });

        document.getElementById('carouselExampleControls').addEventListener('slid.bs.carousel', (event) => {
            const activeIndex = event.to;

            indicators.forEach((indicator, index) => {
                if (index === activeIndex) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        });
    }, []);

    useEffect(() => {
        AOS.init({
            offset: 150,
            duration: 1000
        });
    }, []);
    return (
        <section className="hero-2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <div className="row align-items-center">
                                        <div className="col-md">
                                            <img className="d-block img-fluid" src="Images/slider-v-2-1.png" alt="First slide" />
                                        </div>
                                        <div className="col-md">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ea dolorem ipsam nemo
                                                illum
                                                beatae adipisci numquam mollitia omnis quod quasi! Nisi asperiores ipsa itaque iste voluptas
                                                numquam
                                                dignissimos maxime?</p>
                                            <button className="btn btn-warning mb-3">More</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="row align-items-center">
                                        <div className="col-md">
                                            <img className="d-block img-fluid" src="Images/slider-v-2-2png.png" alt="2nd slide" />
                                        </div>
                                        <div className="col-md">
                                            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quasi similique beatae iusto
                                                nulla
                                                dolorem nostrum. Temporibus ipsa cupiditate, in voluptates, magni reprehenderit, ratione laborum
                                                necessitatibus voluptas aperiam vitae repudiandae! </p>
                                            <button className="btn btn-warning mb-3">More</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="row align-items-center">
                                        <div className="col-md">
                                            <img className="d-block img-fluid" src="Images/slider-v-2-3.png" alt="3rd slide" />
                                        </div>
                                        <div className="col-md">
                                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minima, nostrum animi aut
                                                repellendus, magnam fuga, provident cupiditate eveniet sed dignissimos voluptatum adipisci eos
                                                impedit quia! Deleniti neque id est! </p>
                                            <button className="btn btn-warning mb-3">More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="custom-indicators pt-3">
                                <li data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="custom-indicator active" onClick={() => goToSlide(0)}></li>
                                <li data-bs-target="#carouselExampleControls" data-bs-slide-to="1" className="custom-indicator" onClick={() => goToSlide(1)}></li>
                                <li data-bs-target="#carouselExampleControls" data-bs-slide-to="2" className="custom-indicator" onClick={() => goToSlide(2)}></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero2;
