import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 1000
    });
  }, []);
  return (
    <section className="about-us" id="about">
      <div className="container overflow-hidden">
        <div className="row">
          <div className="col-lg-12">
            <p className="para-about" data-aos="zoom-in-down">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quisquam,
              reprehenderit natus voluptates ex culpa eligendi ipsum nulla odit fuga perferendis iste, consectetur at
              maxime odio quasi similique? Perferendis, officia unde molestiae vel laborum eligendi officiis, inventore
              corporis praesentium sit, quisquam ipsam quidem sapiente illum totam nobis. Possimus doloribus eaque natus
              unde, molestiae quidem ipsum tenetur animi temporibus sunt? Cum, minima enim unde voluptatum nam deserunt
              magnam sint, molestiae perspiciatis fugit autem dicta eos optio non commodi reiciendis totam aliquid?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellat earum doloremque voluptatum
              suscipit odio corporis soluta corrupti asperiores impedit facere modi, nulla nesciunt et rerum omnis alias,
              magni quis!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, perspiciatis asperiores rerum
              tenetur repudiandae aut veniam tempora necessitatibus eligendi autem ratione sunt ipsa enim facere nesciunt
              illum, voluptate nihil sed impedit itaque atque fugiat expedita quos. Nesciunt, alias nobis pariatur
              provident autem minima ex. Delectus odit repellat temporibus quod officiis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About