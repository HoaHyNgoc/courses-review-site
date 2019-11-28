import React, { Component } from "react";
import PageCoursesPopularChild from "./PageCoursesPopularChild";

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
          <div className="row course_boxes">
            <PageCoursesPopularChild />
            <PageCoursesPopularChild />
            <PageCoursesPopularChild />
            <PageCoursesPopularChild />
            <PageCoursesPopularChild />
            <PageCoursesPopularChild />
          </div>
        </div>
      </div>
    );
  }
}

export default PageCoursesPopular;
