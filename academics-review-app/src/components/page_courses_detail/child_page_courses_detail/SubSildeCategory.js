import React, { Component } from "react";

export default class SubSildeCategory extends Component {
  render() {
    return (
      <li className="sidebar_list_item">
        {/* <a href={this.props.obj.section_link_code}>{this.props.obj.section_title}</a> */}
        <a href={"#"+ this.props.obj.section_title}>{this.props.obj.section_title}</a>
      </li>
    );
  }
}
