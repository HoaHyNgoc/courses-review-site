import React, { Component } from 'react';
import PageAdminCrudCreate from './child_page_admin/PageAdminCrudCreate';
import PageAdminCrudEdit from './child_page_admin/PageAdminCrudEdit';
import PageAdminCrudIndex from './child_page_admin/PageAdminCrudIndex';

export default class ComponentsPageAdmin extends Component {
    render() {
        return (
            <div>
                <PageAdminCrudIndex />
                <PageAdminCrudCreate />
                <PageAdminCrudEdit />
            </div>
        );
    }
}
