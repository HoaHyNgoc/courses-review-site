import React, { Component } from "react";

export default class ComponentPageAbout extends Component {
  render() {
    return (
      <div className="owl-item container body-admin">
        <div className="section_title text-center">
          <h1>Webisite system developer</h1>
        </div>
        <div className="testimonials_item text-center">
          <div className="quote">“</div>
          <p className="testimonials_text">
            University of Information Technology (UIT)
          </p>
          <p className="testimonials_text">
            Faculty of software engineering. Subject planning
          </p>
          <br />
          <p className="testimonials_text">
            Website system that supports programmer's knowledge that should be
            developed for the subject project. Apply the MVC model that
            integrates the Reactjs library developed by facebook, bootstrap 4 for front-end and set up
            Restfull-api to connect MongoDB database through the server itself.
          </p>
          <div className="testimonial_user">
            <div className="testimonial_name">
              Project manager: M.Sc Dung Tran
            </div>
            <div className="testimonial_name">
              Programmer: Ngoc Ho, Mai Pham, SE347.K11.PMCL
            </div>
          </div>
        </div>
      </div>
    );
  }
}
