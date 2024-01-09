import React from 'react';
const About = () => {
  return (
    <div className="about-section">
      <section className="top-pd-main about-section-two" id="about-us-head"></section>
      <div className="auto-container">
        <div className="row home-content">
          <div className="text-center">
            <h1 className="title-03">About Us</h1>
          </div>
          <div className="col-lg-6 col-md-12 order-2 wow fadeInRight animated" data-wow-delay="600ms">
            <div className="inner-column">
              <div className="inner-column wow fadeInLeft animated">
                <figure className="image mob-disp overlay-anim wow fadeInUp animated">
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.LfLzHB1a4pesrTf9-4fX2QHaE3&pid=Api&P=0&h=180"
                    width="550"
                    height="350"
                    alt=""
                    loading="lazy"
                  />
                </figure>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="inner-column lef-pd wow fadeInLeft animated">
              <div className="left-text-p-01">
                <h5>
                  Sashakt is recognized as India's Most Respected Early Childhood Education Brand, with over 21 years
                   of experience and a presence in 350+ cities & 3 countries. The journey began in 2001 with 2 preschools,
                    and since then the group has consistently raised the bar for preschool education through its innovative 
                    and mindful curriculum, EUNOIA, which helps children grow holistically in a home-like environment.
                </h5>
                <h5>
                  EuroKids is a part of Lighthouse Learning, one of India's Leading Early Childhood & K-12 Education groups. The group is committed to building a robust foundation & new-age skills in future generations with student-centered goals that align its network of over 1,200 Pre-Schools and 45 Schools. Lighthouse Learning Group delivers the joy of learning to over 150,000 children every day, empowers more than 1000 women entrepreneurs, and employs a talented workforce of over 10,000 people across its offices and campuses. For more details, please visit: <a href="https://www.lighthouse-learning.com/">www.lighthouse-learning.com</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;