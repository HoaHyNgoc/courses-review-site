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
                <a href="index.html">Design Courses</a>
            </li>
            <li className="sidebar_list_item">
                <a href="index.html">All you need to know</a>
            </li>
            <li className="sidebar_list_item">
                <a href="index.html">Uncategorized</a>
            </li>
            <li className="sidebar_list_item">
                <a href="index.html">About Our Departments</a>
            </li>
            <li className="sidebar_list_item">
                <a href="index.html">Choose the right course</a>
            </li>
        </ul>
      </div>
    );
  }
}

export default ContentSideCategory;
