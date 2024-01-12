import React from 'react'
import Header from './Components/Header'
import MainHeader from './Components/MainHeader'
import BreadcrumpServices from './Components/BreadcrumpServices'
import Footer from './Components/Footer'
import AOS from 'aos';
import { useEffect } from 'react'
import 'aos/dist/aos.css';


const Services = () => {
    useEffect(() => {
        AOS.init({
            offset: 150,
            duration: 1000
        });
    }, []);
    return (
        <div className="Services">
            <Header />
            <MainHeader />
            <BreadcrumpServices />

            <section className="services">
                <div className="container overflow-hidden">
                    <p className="ourService mb-5">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ea ipsam ducimus
                        consequuntur a id necessitatibus quasi iusto? Iusto ratione qui ea laborum aliquam mollitia veritatis possimus
                        sapiente animi iste quia, esse, excepturi id quis, labore perspiciatis. Nostrum animi explicabo dolore vero
                        corrupti repellat deleniti, veniam, at cumque, amet hic eligendi a nihil beatae tenetur neque quasi. Repudiandae
                        consequuntur placeat quibusdam iste nulla libero rerum cumque velit nam nesciunt, dolor quisquam hic molestias
                        laudantium blanditiis. Odio illum impedit, sint sequi possimus in architecto porro sit nam at veritatis enim,
                        voluptatum excepturi esse suscipit laudantium nesciunt incidunt quibusdam, quo magnam assumenda ipsa? Nesciunt
                        ratione nemo repudiandae tempore, odit recusandae laborum placeat, a eum harum ducimus, blanditiis dolorum nulla
                        animi. Atque reprehenderit nostrum sit, sequi quod vitae quos eos, quisquam laboriosam voluptatum commodi
                        facilis in. Sapiente quas eveniet libero iusto consequatur reprehenderit, quo autem animi, cupiditate quibusdam
                        delectus voluptas fugit possimus tempora!
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
                                            style={{ transition: 'transform .9s' }}
                                            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title 1</h5>
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
                                            style={{ transition: 'transform .9s' }}
                                            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title 2</h5>
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
                                            style={{ transition: 'transform .9s' }}
                                            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title 3</h5>
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
                                            style={{ transition: 'transform .9s' }}
                                            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title 4</h5>
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
                                            style={{ transition: 'transform .9s' }}
                                            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title 5</h5>
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
                                            style={{ transition: 'transform .9s' }}
                                            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title 6</h5>
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

                    <div className="row mb-5 mt-5 pt-3">
                        <div className="col-lg-6 col-12 text-img">
                            <p className="third-para pb-3" data-aos="fade-left">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum esse quod totam dolor architecto
                                blanditiis odit iusto a quo doloribus doloremque est dolorem cupiditate saepe quas ipsum, quae porro
                                labore
                                excepturi praesentium tempore? Adipisci neque doloremque quo. Ea, ipsum ducimus? Lorem ipsum, dolor sit
                                amet
                                consectetur adipisicing elit. Nostrum vitae iste necessitatibus illo est commodi consectetur? Expedita
                                sint
                                animi cumque, velit asperiores autem iusto? Autem, reiciendis explicabo facere quibusdam rerum deleniti,
                                animi tempora eaque nihil pariatur voluptatibus repellat delectus magni voluptatem, ipsum maiores
                                recusandae. Soluta ab corporis alias esse optio!
                            </p>
                        </div>
                        <div className="col-lg-6 col-12 text-img">
                            <div className="overflow-hidden">
                                <img
                                    className="left-right-section-img"
                                    src="Images/left-right-2.png"
                                    alt=""
                                    data-aos="fade-right"
                                    style={{ transition: 'transform .9s' }}
                                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row flex-row-reverse mb-5">
                        <div className="col-lg-6 col-12 text-img">
                            <p className="third-para pb-3" data-aos="fade-left">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum esse quod totam dolor architecto
                                blanditiis odit iusto a quo doloribus doloremque est dolorem cupiditate saepe quas ipsum, quae porro
                                labore
                                excepturi praesentium tempore? Adipisci neque doloremque quo. Ea, ipsum ducimus? Lorem ipsum, dolor sit
                                amet
                                consectetur adipisicing elit. Nostrum vitae iste necessitatibus illo est commodi consectetur? Expedita
                                sint
                                animi cumque, velit asperiores autem iusto? Autem, reiciendis explicabo facere quibusdam rerum deleniti,
                                animi tempora eaque nihil pariatur voluptatibus repellat delectus magni voluptatem, ipsum maiores
                                recusandae. Soluta ab corporis alias esse optio!
                            </p>
                        </div>
                        <div className="col-lg-6 col-12 text-img">
                            <div className="overflow-hidden">
                                <img
                                    className="left-right-section-img"
                                    src="Images/left-right.png"
                                    alt=""
                                    data-aos="fade-right"
                                    style={{ transition: 'transform .9s' }}
                                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-12 text-img" data-aos="fade-right">
                            <p className="third-para pb-3">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum esse quod totam dolor architecto
                                blanditiis odit iusto a quo doloribus doloremque est dolorem cupiditate saepe quas ipsum, quae porro
                                labore
                                excepturi praesentium tempore? Adipisci neque doloremque quo. Ea, ipsum ducimus? Lorem ipsum dolor sit
                                amet
                                consectetur adipisicing elit. Debitis quo rerum culpa placeat assumenda ducimus minus voluptatem?
                                Accusamus
                                officiis reprehenderit quam. Natus laudantium nostrum in cum velit. Expedita consequatur repellat
                                blanditiis
                                nulla deleniti tenetur nisi sit et quae, obcaecati ex eaque voluptatum dolore a temporibus voluptas non
                                dolorum. Eligendi, consectetur.
                            </p>
                        </div>
                        <div className="col-lg-6 col-12 text-img">
                            <div className="overflow-hidden">
                                <img
                                    className="left-right-section-img"
                                    src="Images/demo.jpg"
                                    alt=""
                                    data-aos="fade-left"
                                    style={{ transition: 'transform .9s' }}
                                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />

        </div>
    )
}

export default Services