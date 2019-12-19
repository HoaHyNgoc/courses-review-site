import React, { Component } from "react";
import ContentSubSectionCode from "../ContentSubSectionCode";

export default class ExerciseSheet extends Component {


    render() {
    return (
      <div>
        <div className="accordion_container">
            <div className="accordion d-flex flex-row align-items-center">
                <p>{this.props.obj.sample_description}</p>
                {/* <p>description</p> */}
            </div>
        </div>
        {/* <div className="row news_post_text" style={{ marginLeft: "50px" }}>
            <p>{this.props.obj.sample_description}</p>
            <p>description</p>
        </div> */}
        <div className="code_example">
          <ContentSubSectionCode codeExample={this.props.obj.sample_code} />
        </div>
        <div className="row" style={{ marginLeft: "50px" }}>
          <form style={{ marginBottom: "50px" }}>
            <div className="form-check-inline" style={{ marginLeft: "80px" }}>
              <label className="form-check-label" htmlFor="radio1">
                <input
                  type="radio"
                  className="form-check-input"
                  id="radio1"
                  name="optradio"
                  defaultValue="option1"
                />
                {this.props.obj.sample_ans_a}
              </label>
            </div>
            <div className="form-check-inline" style={{ marginLeft: "80px" }}>
              <label className="form-check-label" htmlFor="radio2">
                <input
                  type="radio"
                  className="form-check-input"
                  id="radio2"
                  name="optradio"
                  defaultValue="option2"
                  
                />
                {this.props.obj.sample_ans_b}
              </label>
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginLeft: "50px" }}>
              Try it Yourself
            </button>
          </form>
        </div>


      </div>
    );
  }
}
