import React, { Component } from "react";

class PageCoursesHeader extends Component {
  render() {
    return (
      <div className="home">
        <div className="home_background_container prlx_parent">
            <div className="home_background prlx" style={{ backgroundImage: "url(images/courses_background.jpg)" }}></div>
        </div>
        <div className="home_content">
          <h1>Courses</h1>
        </div>
      </div>
    );
  }
}

export default PageCoursesHeader;
