import React, { Component } from 'react';
import { View } from 'react-native';
import Style from './Style';
import { TextTripleExtraLarge } from '../Text';
import Localization from 'assets/locales'

class ViewParallax extends Component {

    render() {
        return (
            <View style={Style.view_parallax} >
                <TextTripleExtraLarge text={ this.props.amount_project } style={{flex: 1}} />
                <TextTripleExtraLarge text={ Localization.t('project_command') } style={{flex: 3}} />
            </View>
        );
    }
}

export default ViewParallax;