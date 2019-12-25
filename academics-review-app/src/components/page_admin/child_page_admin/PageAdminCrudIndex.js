import React, { Component } from 'react';
import axios from 'axios';
import TableRow from '../child_page_admin/CrudDataTableRow';

export default class PageAdminCrudIndex extends Component {

    constructor(props) {
        super(props);
        
        // init state variable
        // this.state = {business: []};
        this.state = {courses:[]};
    }
    
    componentDidMount(){
        // axios.get('http://localhost:4000/business')
        // .then(response => {
        //     this.setState({ business: response.data });
        // })
        // .catch(function (error) {
        //     console.log(error);
        // })
        axios.get('http://localhost:4000/course')
        .then(response => {
            this.setState({ courses: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    // mapping data (database - display frontend)
    tabRow = () =>{
        // return this.state.business.map(function(object, i){
        //     return <TableRow obj={object} key={i} />;
        // });
        return this.state.courses.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
          <div className="container">
            <h3 align="center">Course List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                    <th>Course name</th>
                    <th>Course description</th>
                    <th>Course identification</th>
                    <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>{this.tabRow()}</tbody>
            </table>
          </div>
        );
    }
}