import React, { PropTypes } from 'react'
import {Card, CardItem, Text, Body, Badge, View, Right} from 'native-base';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as action from './action';
import * as selector from './selector';
import Style from "./style";

const ProjectCell = props => {

    const { data } = props

    return (
        <Card transparent style={Style.background_card}>
            <CardItem style={Style.background_card}>
                <Body>
                    <View style={Style.badge_cell}/>
                    <Text style={Style.flag_last_update}>Last Update</Text>
                    <Text style={Style.time_text}>20.00 PM</Text>
                    <Text style={Style.project_name_text}>{ props.text }</Text>
                </Body>
            </CardItem>
        </Card>
    );
}

const ProjectCellContainer = props => {

    _keyExtractor = (item, index) => item.id;

    return (
        <FlatList
            data={props.projects}
            renderItem={item => <ProjectCell data={item} />}
            keyExtractor={this._keyExtractor}
        />
    );
}

const mapStateToProps = () =>
    createStructuredSelector({
        projects: selector.getProjectFetchFulfilled()
    });

// const mapStateToProps = (state) => ({
//     projects: state.projects
// })

export default connect(mapStateToProps, action)(ProjectCellContainer);