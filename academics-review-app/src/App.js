import React from "react";
import GlobalNavigation from "./components/global_page_navigation/GlobalNavigation";
import ComponentsPageCourses from "./components/page_courses/ComponentsPageCourses";

function App() {
  return (
    <div className="super_container">
        <GlobalNavigation />
        <ComponentsPageCourses/>
    </div>
  );
}

export default App;
