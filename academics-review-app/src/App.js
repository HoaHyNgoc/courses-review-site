import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterUrl from "./components/router_dom_url/RouterUrl";

function App() {
  return (
    <Router>
        <div className="super_container">
            {/* <GlobalNavigation /> */}
            <RouterUrl />
            {/* <ComponentsPageCourses /> */}
            {/* <ComponentsPageCoursesDetail /> */}
            {/* <GlobalFooter /> */}
        </div>
    </Router>
  );
}

export default App;
