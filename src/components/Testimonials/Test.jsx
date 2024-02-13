import React from "react";
import "./Test.css";
import { testimonial1, testimonial2, testimonial3 } from "../../assets";
const Test = () => {
  return (
    <section id="test" className="dark-gray">
      <div>
        <h2 >What our students saY ?</h2>
        
        <div className="test-cont">
          <div className="tests">
            <img src={testimonial1} alt="" />
            <div className="reviewwer details">
              <div className="name">Peter</div>
              <div className="company">Google</div>
              <div className="about">
                This is a great course.
                 I got to learn a lot.
              </div>
            </div>
          </div>
          <div className="tests">
            <img src={testimonial2} alt="" />
            <div className="reviewwer-details">
              <div className="name">Sam</div>
              <div className="company">Microsoft</div>
              <div className="about">
                This is a great course. I got to learn a lot.
              </div>
            </div>
          </div>
          <div className="tests">
            <img src={testimonial3} alt="" />
            <div className="reviewwer details">
              <div className="name">Ritika</div>
              <div className="company">Google</div>
              <div className="about">
                Awsome great work.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test;
