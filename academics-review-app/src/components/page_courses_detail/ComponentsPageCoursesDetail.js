import React, { Component } from 'react';
import PageCoursesHeader from '../page_courses/child_page_courses/PageCoursesHeader';
import CoursesDetailContent from './child_page_courses_detail/CoursesDetailContent';

class ComponentsPageCoursesDetail extends Component {
    render() {
        return (
            <div>
                <PageCoursesHeader />
                <CoursesDetailContent />
            </div>
        );
    }
}

export default ComponentsPageCoursesDetail;