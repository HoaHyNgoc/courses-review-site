import React, { Component } from "react";

class PageCoursesPopular extends Component {
  ComponentHeaderPopular = () => {
    return (
      <div className="row">
        <div className="col">
          <div className="section_title text-center">
            <h1>Popular Courses</h1>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="popular page_section">
        <div className="container">
            {this.ComponentHeaderPopular()}
            
        </div>
      </div>
    );
  }
}

export default PageCoursesPopular;
