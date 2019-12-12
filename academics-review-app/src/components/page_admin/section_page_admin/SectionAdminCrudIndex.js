import React, { Component } from 'react';
import axios from 'axios';
import SectionDataTableRow from '../section_page_admin/SectionDataTableRow';

export default class SectionAdminCrudIndex extends Component {

    constructor(props) {
        super(props);
        
        // init state variable
        this.state = {sections:[]};
    }

    componentDidMount(){
        axios.get('http://localhost:4000/section')
        .then(response => {
            this.setState({ sections: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    // mapping data (database - display frontend)
    tabRow = () =>{
        return this.state.sections.map(function(object, i){
            return <SectionDataTableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
            <h3 align="center">Section List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                        <th>Id course</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Code</th>
                        <th>Link-code</th>
                        <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>{this.tabRow()}</tbody>
                </table>
          </div>
        );
    }
}