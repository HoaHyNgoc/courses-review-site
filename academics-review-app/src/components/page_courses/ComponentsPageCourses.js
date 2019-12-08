import React, { Component } from "react";
import PageCoursesHeader from "./child_page_courses/PageCoursesHeader";
import PageCoursesPopular from "./child_page_courses/PageCoursesPopular";
import GlobalNavigation from '../global_page_navigation/GlobalNavigation';
import GlobalFooter from '../global_page_footer/GlobalFooter';

class ComponentsPageCourses extends Component {
  render() {
    return (
      <div>
        <GlobalNavigation />
        <PageCoursesHeader />
        <PageCoursesPopular />
        <GlobalFooter />
      </div>
    );
  }
}

export default ComponentsPageCourses;
