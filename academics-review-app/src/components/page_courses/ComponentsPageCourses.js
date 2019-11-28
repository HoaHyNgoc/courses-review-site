import React, { Component } from "react";
import PageCoursesHeader from "./child_page_courses/PageCoursesHeader";
import PageCoursesPopular from "./child_page_courses/PageCoursesPopular";

class ComponentsPageCourses extends Component {
  render() {
    return (
      <div>
        <PageCoursesHeader />
        <PageCoursesPopular />
      </div>
    );
  }
}

export default ComponentsPageCourses;
