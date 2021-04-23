import React, { Component } from "react";

class Colten extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image1;
    const bio = this.props.data.bio;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/c.png" alt="Nordic Giant Profile Pic" />
          </div>
          <div className="nine columns main-col">
            <h2>Colten Woo</h2>

            <p>Colten Woo is a fourth year at the University of Washington pursuing a Bachelor of Science in Informatics and Bachelor of Arts in Business Administration. For this report, Colten worked on the ecosystem scan to produce quantitative insights and recommendations on data standards.</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Email</h2>
                <p className="address">
                  <span>coltenw@uw.edu</span>
                  <br />
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="https://www.linkedin.com/in/colten-woo-54b66b194/" className="button">
                    <i className="fa fa-linkedin"></i>Colten's LinkedIn
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

export default Colten;
