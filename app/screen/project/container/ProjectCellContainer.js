import React, { Component } from 'react'
import { FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as action from 'myredux/action';
import * as selector from 'myredux/selector';
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
                    <TouchableOpacity onPress={ () => { this.props.toogleProjectFormModal(true) } }>
                        <ProjectCell data={item} />
                    </TouchableOpacity>
                }
                keyExtractor={item => String(item.id)}
                ListFooterComponent={
                    <FooterCell isRequesting={this.props.isRequesting} 
                        numberOfRow={this.props.projects.length} />
                }
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