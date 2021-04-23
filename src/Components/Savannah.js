import React, { Component } from "react";

class Savannah extends Component {
  render() {

    return (
      <section id="ourteam">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/s.png" alt="Nordic Giant Profile Pic" />
          </div>
          <div className="nine columns main-col">
            <h2>Savannah Umail-Jepson</h2>

            <p>Savannah Umali-Jepson is a fourth year at the University of Washington graduating with a Bachelors of Science in Informatics. Savannah specializes in biomedical and health informatics and human-computer interaction. For this research, Savannah primarily contributed to the key informant interview portion. </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Email</h2>
                <p className="address">
                  <span>scuj@uw.edu</span>
                  <br />
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="https://www.linkedin.com/in/savannah-umali-jepson/" className="button">
                    <i className="fa fa-linkedin"></i>Savannah's LinkedIn
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

export default Savannah;