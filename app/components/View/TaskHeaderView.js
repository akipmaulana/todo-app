import React, { Component } from 'react';
import { View } from 'native-base';
import Style from './Style';
import { Color, Font } from "config";
import { TextTripleExtraLarge } from 'components/Text';
import Localization, * as LocalizeKey from 'assets/locales';

export class TaskHeaderView extends Component {

    render() {
        return (
            <View style={Style.header_view} >
                <View style={{ flex: 1, alignItems: 'center'}} >
                    <TextTripleExtraLarge text={ 3 } flex={1} color={ Style.primary_header_view_text.color } />
                    <TextTripleExtraLarge text={ 'OPEN' } flex={1} color={ Style.primary_header_view_text.color } />
                </View>
                <View style={Style.header_separator_vertical} />
                <View style={{ flex: 1, alignItems: 'center'}}>
                    <TextTripleExtraLarge text={ 5 } flex={1} color={ Style.primary_header_view_text.color } />
                    <TextTripleExtraLarge text={ 'CLOSE' } flex={1} color={ Style.secondary_header_view_text.color } />
                </View>
            </View>
        );
    }
}