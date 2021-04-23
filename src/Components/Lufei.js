import React, { Component } from "react";

class Lufei extends Component {
  render() {

    return (
      <section id="ourteam">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/l.JPG" alt="Nordic Giant Profile Pic" />
          </div>
          <div className="nine columns main-col">
            <h2>Lufei Wang</h2>

            <p>Lufei Wang is a fourth-year student at the University of Washington graduating with a Bachelor of Science in Informatics and Economics. Lufei specializes in data engineering and software engineering. For this report, Lufei was mainly tasked with creating data visualizations and producing insights and recommendations on data standards. </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Email</h2>
                <p className="address">
                  <span>lufeiw@uw.edu</span>
                  <br />
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="https://www.linkedin.com/in/lufei-maggie-wang/" className="button">
                    <i className="fa fa-linkedin"></i>Lufei's LinkedIn
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

export default Lufei;