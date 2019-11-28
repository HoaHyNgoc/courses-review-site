import React, { Component } from 'react';
import DetailContentSection from './DetailContentSection';
import DetailContentSide from './DetailContentSide';

class CoursesDetailContent extends Component {
    render() {
        return (
            <div className="news">
                <div className="container">
                    <div className="row">
                        <DetailContentSection />
                        <DetailContentSide />
                    </div>
                </div>
            </div>
        );
    }
}

export default CoursesDetailContent;