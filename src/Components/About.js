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
            <br></br>
            <h2>Project Information</h2>
            <p>Our team set out to understand barriers to accurate, timely COVID-19 data publishing across the United States. Working with our sponsor Sarah Schacht, we investigated how local governments process and normalize a high volume of data as well as publish information to a variety of stakeholders. For our research, we conducted an ecosystem scan of all 50 US states and key informant interviews to understand what is happening inside public health departments. Using our findings, we produced reports highlighting shortcomings and obstacles in COVID-19 data reporting and provided recommendations. The report we created will hopefully be used to remedy existing problems and better prepare government bodies to collect and report data in future emergency situations.</p>
            <h2>Project Status</h2>
            <p>Project has been finished on our part and has been handed off to our sponsor Sarah. The likely chance of another team picking this project up is very unlikely since we finished the project.</p>
            </div>
          </div>
      </section>
    );
  }
}

export default About;
