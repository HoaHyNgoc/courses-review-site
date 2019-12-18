import React, { Component } from "react";
import axios from "axios";
import SubSildeCategory from "./SubSildeCategory";

class ContentSideCategory extends Component {
  constructor(props) {
    super(props);
    this.state = { sections: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/section")
      .then(response => {
        this.setState({ sections: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  // mapping data (database - display frontend)
  subSectionRow = () => {
    return this.state.sections.map(function(object, i) {
      return <SubSildeCategory obj={object} key={i} />;
    });
  };

  render() {
    return (
      <div className="sidebar_section">
        <div className="sidebar_section_title">
          <h3>Sections</h3>
        </div>
        <ul className="sidebar_list">{this.subSectionRow()}</ul>
      </div>
    );
  }
}

export default ContentSideCategory;
