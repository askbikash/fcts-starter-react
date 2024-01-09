import React from 'react';

const ServicesSection = () => {
  return (
    <section id="section-3">
      <div className="container overflow-hidden mb-5">
        <h1 className="text-center mb-5">Our Services</h1>
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

        <div className="row pb-5">
          <div className="col-lg-6 col-12 text-img pb-3">
            <p className="third-para" data-aos="fade-right">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum esse quod totam dolor architecto
              blanditiis odit iusto a quo doloribus doloremque est dolorem cupiditate saepe quas ipsum, quae porro
              labore excepturi praesentium tempore? Adipisci neque doloremque quo. Ea, ipsum ducimus? Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Nostrum vitae iste necessitatibus illo est commodi
              consectetur? Expedita sint animi cumque, velit asperiores autem iusto? Autem, reiciendis explicabo facere
              quibusdam rerum deleniti, animi tempora eaque nihil pariatur voluptatibus repellat delectus magni
              voluptatem, ipsum maiores recusandae. Soluta ab corporis alias esse optio!
            </p>
          </div>
          <div className="col-lg-6 col-12 text-img pb-3">
            <div className="left-right-img overflow-hidden">
              <img
                className="left-right-section-img"
                src="Images/left-right-2.png"
                alt=""
                data-aos="fade-left"
                style={{ transition: 'transform 0.9s' }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          </div>
        </div>

        <div className="row flex-row-reverse pb-5">
          <div className="col-lg-6 col-12 text-img pb-3">
            <p className="third-para" data-aos="fade-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum esse quod totam dolor architecto
              blanditiis odit iusto a quo doloribus doloremque est dolorem cupiditate saepe quas ipsum, quae porro
              labore excepturi praesentium tempore? Adipisci neque doloremque quo. Ea, ipsum ducimus? Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Nostrum vitae iste necessitatibus illo est commodi
              consectetur? Expedita sint animi cumque, velit asperiores autem iusto? Autem, reiciendis explicabo facere
              quibusdam rerum deleniti, animi tempora eaque nihil pariatur voluptatibus repellat delectus magni
              voluptatem, ipsum maiores recusandae. Soluta ab corporis alias esse optio!
            </p>
          </div>
          <div className="col-lg-6 col-12 text-img pb-3">
            <div className="left-right-img overflow-hidden">
              <img
                className="left-right-section-img"
                src="Images/left-right.png"
                alt=""
                data-aos="fade-right"
                style={{ transition: 'transform 0.9s' }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-12 text-img pb-3" data-aos="fade-right">
            <p className="third-para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum esse quod totam dolor architecto
              blanditiis odit iusto a quo doloribus doloremque est dolorem cupiditate saepe quas ipsum, quae porro
              labore excepturi praesentium tempore? Adipisci neque doloremque quo. Ea, ipsum ducimus? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Debitis quo rerum culpa placeat assumenda ducimus minus
              voluptatem? Accusamus officiis reprehenderit quam. Natus laudantium nostrum in cum velit. Expedita
              consequatur repellat blanditiis nulla deleniti tenetur nisi sit et quae, obcaecati ex eaque voluptatum
              dolore a temporibus voluptas non dolorum. Eligendi, consectetur.
            </p>
          </div>
          <div className="col-lg-6 col-12 text-img">
            <div className="left-right-img overflow-hidden">
              <img
                className="left-right-section-img"
                src="Images/left-right.png"
                alt=""
                data-aos="fade-left"
                style={{ transition: 'transform 0.9s' }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
