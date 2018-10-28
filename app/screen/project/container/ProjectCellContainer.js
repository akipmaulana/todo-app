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
                keyExtractor={item => String(item.id)}
                onEndReached={ (info) => {
                    if (this.props.meta.next !== '' && !this.props.isFetchProject) {
                        this.props.fetchProjects(this.props.meta.next)
                    }
                }}
                onEndReachedThreshold={0.7}
                renderItem={ item =>
                    <TouchableOpacity onPress={ () => this.props.toogleProjectFormModal(true, item) }>
                        <ProjectCell 
                            data={item} 
                            isCloseProject={this.props.isCloseProject}
                            handleClosed={(data) => this.props.closeProject(data)} />
                    </TouchableOpacity>
                }
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
        isCloseProject: appSelector.isCloseProject(state, props),
        isFetchProject: appSelector.isFetchProject(state, props),
        projects: projectSelector.getProjectData(state, props),
        meta: projectSelector.getProjectMeta(state, props),
    });

export default connect(mapStateToProps, projectAction)(ProjectCellContainer);