import React, { Component } from 'react';
import { View } from 'native-base';
import Style from './Style';
import { TextLarge } from 'components/Text';
import Localization, * as LocalizeKey from 'assets/locales';

export class ProjectInsertModal extends Component {

    render() {
        return (
            <View style={Style.pim_background_view} >
                <View style={Style.pim_header_view}>
                    <TextLarge 
                        text={ Localization.t(LocalizeKey.CREATE_NEW_PROJECT) } 
                        color={ Style.pim_header_text.color } 
                        fontFamily={ Style.pim_header_text.fontFamily }/>
                </View>
            </View>
        );
    }
}