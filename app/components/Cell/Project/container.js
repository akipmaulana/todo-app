import React, { PropTypes } from 'react'
import { FlatList } from 'react-native';
import { ProjectCell } from './ProjectCell'
import Style from "./style";

const ProjectCellContainer = props => {

    _keyExtractor = (item, index) => item.id;

    return (
        <FlatList
            data={this.props.projects}
            renderItem={item => <ProjectCell data={item} />}
            keyExtractor={this._keyExtractor}
        />
    );
}

const mapStateToProps = () =>
    createStructuredSelector({
        projects: selectors.getUserFetchFulfilled()
    });

export default connect(mapStateToProps, actions)(ProjectCellContainer);