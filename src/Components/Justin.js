import React, { Component } from "react";

class Justin extends Component {
  render() {

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/j.jpg" alt="Nordic Giant Profile Pic" />
          </div>
          <div className="nine columns main-col">
            <h2>Justin Lim</h2>

            <p>Justin DongKyu Lim is a third year at the University of Washington graduating with a Bachelor of Science in Informatics and with a minor in Computational Finance & Risk Management. Justin focuses on software engineering, data science, and information architecture. During this research, Justin was mainly tasked with researching the ecosystem and conducting key informant interviews.</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Email</h2>
                <p className="address">
                  <span>limj27@uw.edu</span>
                  <br />
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="https://www.linkedin.com/in/justin-lim-aa6030176/" className="button">
                    <i className="fa fa-linkedin"></i>Justin's LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Justin;
