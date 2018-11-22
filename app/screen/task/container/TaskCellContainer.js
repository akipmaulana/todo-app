import React, { Component } from 'react'
import { FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { taskAction, taskSelector, appSelector } from 'myredux';
import { TaskCell, FooterCell } from 'components/Cell'
import { ScreenName } from "app/AppConstant";

class TaskCellContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTasks()
    }

    render() {
        const { navigate } = this.props.navigation
        const data = this.props.task.data || []
        const meta = this.props.task.meta
        return (
            <FlatList
                data={data}
                keyExtractor={item => String(item.id)}
                onEndReached={ (info) => {
                    if (meta.next !== '' && !this.props.isFetchTask) {
                        this.props.fetchTasks(meta.next)
                    }
                }}
                onEndReachedThreshold={0.7}
                renderItem={ item =>
                    <TouchableOpacity 
                        onLongPress={ () => this.props.toogleTaskFormModal(true, item) }
                    >
                        <TaskCell 
                            data={item} 
                            isCloseTask={this.props.isCloseTask}
                            handleClosed={(data) => this.props.closeTask(data)} />
                    </TouchableOpacity>
                }
                ListFooterComponent={
                    <FooterCell isLoadMore={this.props.isFetchTask} 
                        numberOfRow={data.length} />
                }
            />
        );
    }
}

const mapStateToProps = (state, props) =>
    createStructuredSelector({
        isCloseTask: appSelector.isCloseTask(state, props),
        isFetchTask: appSelector.isFetchTask(state, props),
        task: taskSelector.getTask(state, props),
    });

export default connect(mapStateToProps, taskAction)(TaskCellContainer);