import React, { Component } from 'react';
import PageCoursesHeader from '../page_courses/child_page_courses/PageCoursesHeader';
import CoursesDetailContent from './child_page_courses_detail/CoursesDetailContent';
import GlobalNavigation from '../global_page_navigation/GlobalNavigation';
import GlobalFooter from '../global_page_footer/GlobalFooter';

class ComponentsPageCoursesDetail extends Component {
    render() {
        return (
            <div>
                <GlobalNavigation />
                <PageCoursesHeader />
                <CoursesDetailContent />
                <GlobalFooter />
            </div>
        );
    }
}

export default ComponentsPageCoursesDetail;