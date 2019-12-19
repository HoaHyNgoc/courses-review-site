import React, { Component } from "react";
import ContentSubSectionCode from "../ContentSubSectionCode";

export default class CourseDetailExercise extends Component {
  render() {
    return (
      <div className="newsletter footer">
        <div className="row">
          <div className="col">
            <div className="section_title text-center">
              <h1>Test Yourself With Exercises</h1>
            </div>
          </div>
        </div>
        <div className="row news_post_text" style={{ marginLeft: "50px" }}>
          <p>
            Use the correct HTML to make the text below into a link to
            "default.html".
          </p>
        </div>
        <div className="row" style={{ marginLeft: "50px" }}>
          <ContentSubSectionCode codeExample="Use the correct HTML to make the text below into a link to default.html" />
        </div>
        <div className="row" style={{ marginLeft: "50px" }}>
          <form>
            <div className="form-check-inline">
              <label className="form-check-label" htmlFor="radio1">
                <input type="radio" className="form-check-input"
                  id="radio1" name="optradio"
                  defaultValue="option1"
                />
                Option 1
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label" htmlFor="radio2">
                <input type="radio" className="form-check-input"
                  id="radio2" name="optradio"
                  defaultValue="option2"
                />
                Option 2
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="row">
          <div className="col text-center">
            <div className="newsletter_form_container mx-auto">
              <form action="post">
                <div className="newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-center">
                  <input
                    id="newsletter_email"
                    className="newsletter_email"
                    type="email"
                    placeholder="Edit result"
                    required="required"
                    data-error="Valid email is required."
                  />
                  <button
                    id="newsletter_submit"
                    type="submit"
                    className="newsletter_submit_btn trans_300"
                    value="Submit"
                  >
                    Try it Yourself
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
