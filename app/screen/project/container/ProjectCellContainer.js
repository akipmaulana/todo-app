import React, { Component } from 'react'
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as action from 'myredux/action';
import * as selector from 'myredux/selector';
import { ProjectCell } from 'components/Cell'

class ProjectCellContainer extends Component {

    componentDidMount() {
        this.props.fetchProjects()
    }

    render() {
        return (
            <FlatList
                data={this.props.projects}
                renderItem={item => <ProjectCell data={item} />}
                keyExtractor={item => String(item.id)}
            />
        );
    }
}

const mapStateToProps = (state, props) =>
    createStructuredSelector({
        projects: selector.getProjectFetchFulfilled(state, props)
    });

export default connect(mapStateToProps, action)(ProjectCellContainer);