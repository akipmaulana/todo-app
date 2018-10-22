import React from 'react'
import {Card, CardItem, Text, Body, View} from 'native-base';
import Style from "./Style";

export const ProjectCell = props => {

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