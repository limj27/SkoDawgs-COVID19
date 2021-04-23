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
            <img className="profile-pic" src={profilepic} alt="Nordic Giant Profile Pic" />
          </div>
          <div className="nine columns main-col">
            <h2>About Our Team</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contacts</h2>
                <p className="address">
                  <span>Emails:</span>
                  <br />
                  <span>{email}</span>
                  <br />
                  <span>{email1}</span>
                  <br />
                  <span>{email2}</span>
                  <br />
                  <span>{email3}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button">
                    <i className="fa fa-download"></i>Link to our sponsor
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

export default About;
