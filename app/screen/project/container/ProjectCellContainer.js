import React, { Component } from 'react'
import { FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { projectAction, projectSelector, appSelector } from 'myredux';
import { ProjectCell, FooterCell } from 'components/Cell'

class ProjectCellContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProjects()
    }

    render() {
        return (
            <FlatList
                data={this.props.projects}
                renderItem={ item =>
                    <TouchableOpacity onPress={ () => { this.props.toogleProjectFormModal(true, item) } }>
                        <ProjectCell data={item} />
                    </TouchableOpacity>
                }
                keyExtractor={item => String(item.id)}
                ListFooterComponent={
                    <FooterCell isLoadMore={this.props.isFetchProject} 
                        numberOfRow={this.props.projects.length} />
                }
            />
        );
    }
}

const mapStateToProps = (state, props) =>
    createStructuredSelector({
        isFetchProject: appSelector.isFetchProject(state, props),
        projects: projectSelector.getProjectFetchFulfilled(state, props)
    });

export default connect(mapStateToProps, projectAction)(ProjectCellContainer);