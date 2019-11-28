import React, { Component } from "react";

class ContentSideCategory extends Component {
  render() {
    return (
      <div className="sidebar_section">
        <div className="sidebar_section_title">
            <h3>Sections</h3>
        </div>
        <ul className="sidebar_list">
            <li className="sidebar_list_item">
                <a href="#">Design Courses</a>
            </li>
            <li className="sidebar_list_item">
                <a href="#">All you need to know</a>
            </li>
            <li className="sidebar_list_item">
                <a href="#">Uncategorized</a>
            </li>
            <li className="sidebar_list_item">
                <a href="#">About Our Departments</a>
            </li>
            <li className="sidebar_list_item">
                <a href="#">Choose the right course</a>
            </li>
        </ul>
      </div>
    );
  }
}

export default ContentSideCategory;
