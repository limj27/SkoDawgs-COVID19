import React, { Component } from "react";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const email = this.props.data.email;
    const email1 = this.props.data.email1;
    const email2 = this.props.data.email2;
    const email3 = this.props.data.email3;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/ischool.png" alt="Nordic Giant Profile Pic" />
          </div>
          <div className="nine columns main-col">
            <h2>About Our Sponsor</h2>

            <p>Our team has been working with a sponsor, Sarah Schacht who is a data + digital fellow from Georgetown University's Beeck Center. We were matched through University Washington's Information School to work on this project to research into what the challenges of reporting and collecting COVID-19 data. Then we also looked into how we can improve the data management model and the government's data standards.</p>
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button">
                    <i className="fa fa-download"></i>Link to our sponsor
                  </a>
                </p>
              </div>
            </div>
          </div>
      </section>
    );
  }
}

export default About;
