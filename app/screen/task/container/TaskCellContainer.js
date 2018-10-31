import React, { Component } from 'react'
import { FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { projectAction, projectSelector, appSelector } from 'myredux';
import { TaskCell, FooterCell } from 'components/Cell'
import { ScreenName } from "app/AppConstant";

class TaskCellContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProjects()
    }

    render() {
        const { navigate } = this.props.navigation
        const data = this.props.project.data || []
        const meta = this.props.project.meta
        return (
            <FlatList
                data={data}
                keyExtractor={item => String(item.id)}
                onEndReached={ (info) => {
                    if (meta.next !== '' && !this.props.isFetchProject) {
                        this.props.fetchProjects(meta.next)
                    }
                }}
                onEndReachedThreshold={0.7}
                renderItem={ item =>
                    <TouchableOpacity 
                        onPress={ () => navigate(ScreenName.TASK, { project: item.item }) }
                        onLongPress={ () => this.props.toogleProjectFormModal(true, item) }
                    >
                        <TaskCell 
                            data={item} 
                            isCloseProject={this.props.isCloseProject}
                            handleClosed={(data) => this.props.closeProject(data)} />
                    </TouchableOpacity>
                }
                ListFooterComponent={
                    <FooterCell isLoadMore={this.props.isFetchProject} 
                        numberOfRow={data.length} />
                }
            />
        );
    }
}

const mapStateToProps = (state, props) =>
    createStructuredSelector({
        isCloseProject: appSelector.isCloseProject(state, props),
        isFetchProject: appSelector.isFetchProject(state, props),
        project: projectSelector.getProject(state, props),
    });

export default connect(mapStateToProps, projectAction)(TaskCellContainer);