import React from "react";
import GlobalNavigation from "./components/global_page_navigation/GlobalNavigation";
import ComponentsPageCourses from "./components/page_courses/ComponentsPageCourses";
import GlobalFooter from "./components/global_page_footer/GlobalFooter";
import ComponentsPageCoursesDetail from "./components/page_courses_detail/ComponentsPageCoursesDetail";

function App() {
  return (
    <div className="super_container">
        <GlobalNavigation />
        {/* <ComponentsPageCourses /> */}
        <ComponentsPageCoursesDetail />
        <GlobalFooter />
    </div>
  );
}

export default App;
