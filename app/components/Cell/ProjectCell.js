import React, { Component } from 'react'
import {Card, CardItem, Text, Body, View} from 'native-base';
import Style from "./Style";
import { ButtonClose, ButtonOpen } from 'components/Button'
import { Color } from 'config'
import { LoadingPrimary } from '../Loading/LoadingPrimary';

export class ProjectCell extends Component {

    state = {
        closeLoading: false
    }

    handlePress = () => {
        const closeData = {
            index: this.props.data.index,
            id: this.props.data.item.id,
            isClosed: !this.props.data.item.isClosed
        }
        this.props.handleClosed(closeData)
        this.setState({closeLoading: true})
    }

    componentDidUpdate(prevProps) {
        if (this.props.data.item.isClosed !== prevProps.data.item.isClosed) {
            this.setState({ closeLoading: false })
        }
    }

    render() {
        return (
            <View>
                <Card transparent style={Style.background_card}>
                    <CardItem style={Style.background_card}>
                        <Body>
                            <View style={{...Style.badge_cell, backgroundColor: this.props.data.item.isClosed ? Color.light_grey4 : Color.amber}}/>
                            <Text style={Style.flag_last_update}>Last Update</Text>
                            <Text style={Style.time_text}>{ this.props.data.item.updatedAt }</Text>
                            <Text style={Style.project_name_text}>{ this.props.data.item.name }</Text>
                            {
                                this.props.data.item.isClosed ?
                                    <ButtonOpen onPress={this.handlePress.bind(this)} /> :
                                    <ButtonClose onPress={this.handlePress.bind(this)} />
                            }
                        </Body>
                    </CardItem>
                </Card>
                <LoadingPrimary loading={this.state.closeLoading}/>
            </View>
        );
    }
}