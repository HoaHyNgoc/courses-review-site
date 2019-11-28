import React, { Component } from 'react';
import DetailContentSection from './DetailContentSection';

class CoursesDetailContent extends Component {
    render() {
        return (
            <div className="news">
                <div className="container">
                    <div className="row">
                        <DetailContentSection />
                    </div>
                </div>
            </div>
        );
    }
}

export default CoursesDetailContent;