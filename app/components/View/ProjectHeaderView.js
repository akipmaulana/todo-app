import React, { Component } from 'react';
import { View } from 'native-base';
import Style from './Style';
import { TextTripleExtraLarge, TextDoubleExtraLarge } from 'components/Text';
import Localization, * as LocalizeKey from 'assets/locales';

export class ProjectHeaderView extends Component {

    render() {
        return (
            <View style={Style.header_view} >
                <TextTripleExtraLarge text={ this.props.amount_project } flex={1} color={ Style.primary_header_view_text.color } />
                <TextDoubleExtraLarge text={ Localization.t(LocalizeKey.PROJECT_COMMAND) } flex={3} color={ Style.primary_header_view_text.color }  />
            </View>
        );
    }
}