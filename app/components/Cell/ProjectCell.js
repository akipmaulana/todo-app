import React from 'react'
import {Card, CardItem, Text, Body, View} from 'native-base';
import Style from "./Style";
import { ButtonClose } from 'components/Button'
import { Color } from 'config'

export const ProjectCell = props => {

    const { data, handleClosed } = props

    return (
        <Card transparent style={Style.background_card}>
            <CardItem style={Style.background_card}>
                <Body>
                    <View style={{...Style.badge_cell, backgroundColor: data.item.isClose ? Color.light_grey4 : Color.amber}}/>
                    <Text style={Style.flag_last_update}>Last Update</Text>
                    <Text style={Style.time_text}>{ data.item.updatedAt }</Text>
                    <Text style={Style.project_name_text}>{ data.item.name }</Text>
                    <ButtonClose disabled={ data.item.isClose } onPress={() => handleClosed(data.item.id, !data.item.isClose)} />
                </Body>
            </CardItem>
        </Card>
    );
}