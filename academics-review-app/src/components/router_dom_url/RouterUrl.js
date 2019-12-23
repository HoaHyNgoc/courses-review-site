import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import ComponentsPageCourses from '../page_courses/ComponentsPageCourses';
import ComponentsPageCoursesDetail from '../page_courses_detail/ComponentsPageCoursesDetail';
import PageAdminCrudIndex from '../page_admin/child_page_admin/PageAdminCrudIndex';
import PageAdminCrudCreate from '../page_admin/child_page_admin/PageAdminCrudCreate';
import PageAdminCrudEdit from '../page_admin/child_page_admin/PageAdminCrudEdit';
import SectionAdminCrudCreate from '../page_admin/section_page_admin/SectionAdminCrudCreate';
import SectionAdminCrudIndex from '../page_admin/section_page_admin/SectionAdminCrudIndex';
import SectionAdminCrudEdit from '../page_admin/section_page_admin/SectionAdminCrudEdit';
import ComponentsPageAdmin from '../page_admin/ComponentsPageAdmin';
import ComponentPageAbout from '../page_aboutus/ComponentPageAbout';


export default class RouterUrl extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/"><ComponentsPageCourses /></Route>
                {/* <Route path="/courses-details"><ComponentsPageCoursesDetail /></Route> */}
                <Route path="/courses-details/:id" component={ComponentsPageCoursesDetail}/>
                <Route path="/admin-index-data"><PageAdminCrudIndex /></Route>
                <Route path="/admin-create-data"><PageAdminCrudCreate /></Route>
                <Route path="/edit/:id" component={ PageAdminCrudEdit }/>
                {/* section */}
                <Route path="/admin-create-section" component={SectionAdminCrudCreate}/>
                <Route path="/admin-index-section" component={SectionAdminCrudIndex}/>
                <Route path="/current/:id" component={ SectionAdminCrudEdit }/>
                {/* sample */}

                <Route path="/admin/:pass" component={ComponentsPageAdmin}/>

                {/* about us */}
                <Route path="/about" component={ComponentPageAbout}/>

                <Route component={ComponentsPageCourses}/>
            </Switch>
        );
    }
}