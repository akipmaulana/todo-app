import React, { Component } from 'react'
import { FlatList, ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as action from 'myredux/action';
import * as selector from 'myredux/selector';
import { ProjectCell } from 'components/Cell'

class ProjectCellContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProjects()
    }

    renderFooter() {
        const footer = (
            <View
                style={{
                    paddingVertical: 16,
                }}
            >
                <ActivityIndicator animating size="large" />
            </View>
        )
        return this.props.isRequesting ? footer : null
    }

    render() {
        return (
            <FlatList
                data={this.props.projects}
                renderItem={item => <ProjectCell data={item} />}
                keyExtractor={item => String(item.id)}
                ListFooterComponent={this.renderFooter.bind(this)}
            />
        );
    }
}

const mapStateToProps = (state, props) =>
    createStructuredSelector({
        isRequesting: selector.isRequesting(state, props),
        projects: selector.getProjectFetchFulfilled(state, props)
    });

export default connect(mapStateToProps, action)(ProjectCellContainer);