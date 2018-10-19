import React, { Component } from 'react'
import {Card, CardItem, Text, Body, Badge, View, Right} from 'native-base';
import { VirtualizedList, FlatList } from 'react-native';
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
                    <Text style={Style.project_name_text}>{ data.item.name }</Text>
                </Body>
            </CardItem>
        </Card>
    );
}

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