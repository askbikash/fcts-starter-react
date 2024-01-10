import React, { useState } from 'react';

const Stepper = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleStepClick = (index) => {
        setActiveStep(index);
    };

    return (
        <section className="journey">
            <div className="container">
                <div className="accordion" id="accordionExample">
                    <div className="steps">
                        <progress id="progress" value={activeStep * 100 / 3} max={100}></progress>
                        <div className="step-item">
                            <button
                                className={`step-button text-center ${activeStep >= 0 ? 'done' : ''}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded={activeStep === 0}
                                aria-controls="collapseOne"
                                onClick={() => handleStepClick(0)}
                            >
                                1
                            </button>
                            <div className="step-title">First Step</div>
                        </div>
                        <div className="step-item">
                            <button
                                className={`step-button text-center ${activeStep >= 1 ? 'done' : ''}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded={activeStep === 1}
                                aria-controls="collapseTwo"
                                onClick={() => handleStepClick(1)}
                            >
                                2
                            </button>
                            <div className="step-title">Second Step</div>
                        </div>
                        <div className="step-item">
                            <button
                                className={`step-button text-center ${activeStep >= 2 ? 'done' : ''}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded={activeStep === 2}
                                aria-controls="collapseThree"
                                onClick={() => handleStepClick(2)}
                            >
                                3
                            </button>
                            <div className="step-title">Third Step</div>
                        </div>
                        <div className="step-item">
                            <button
                                className={`step-button text-center ${activeStep >= 3 ? 'done' : ''}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded={activeStep === 3}
                                aria-controls="collapseFour"
                                onClick={() => handleStepClick(3)}
                            >
                                4
                            </button>
                            <div className="step-title">Fourth Step</div>
                        </div>
                    </div>
                    <div className="card">
                        <div id="headingOne">
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="card-body">
                                <h2>Year XXXX</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quibusdam, possimus nemo quo
                                    molestias accusamus a saepe nulla sed voluptas, dolorem beatae esse iusto exercitationem ratione
                                    necessitatibus? Molestias sed rem magnam. Omnis asperiores voluptate odit porro ipsa veritatis quibusdam
                                    a quo, odio mollitia explicabo assumenda labore alias ab molestiae inventore modi eius voluptates iste
                                    cum officia! Totam dignissimos nesciunt porro.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div id="headingTwo">

                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="card-body">
                                <h2>Year XXXX</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis reiciendis at quas quam excepturi,
                                    unde error consectetur, facere adipisci id, neque beatae magnam perferendis esse ullam! Mollitia
                                    doloremque optio dicta!</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div id="headingThree">

                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="card-body">
                                <h2> Year XXXX</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quam quas. Ratione veritatis quasi
                                    repellendus, laboriosam nihil aliquid a, exercitationem cum sit velit ut. Aut molestiae sed harum eaque
                                    alias voluptatibus maiores quo velit reprehenderit nemo optio, natus quos quaerat magni nobis eos sint
                                    neque totam iure eligendi soluta. Cum!</p>
                            </div>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="card-body">
                                <h2> Year XXXX</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quam quas. Ratione veritatis quasi
                                    repellendus, laboriosam nihil aliquid a, exercitationem cum sit velit ut. Aut molestiae sed harum eaque
                                    alias voluptatibus maiores quo velit reprehenderit nemo optio, natus quos quaerat magni nobis eos sint
                                    neque totam iure eligendi soluta. Cum!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stepper;
