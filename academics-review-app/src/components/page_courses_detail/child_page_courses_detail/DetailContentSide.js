import React, { Component } from 'react';
import ContentSideCategory from './ContentSideCategory';

class DetailContentSide extends Component {
    render() {
        return (
            <div className="col-lg-4">
                <div class="sidebar">
                    <ContentSideCategory idCourse={this.props.idCourse}/>
                </div>
            </div>
        );
    }
}

export default DetailContentSide;