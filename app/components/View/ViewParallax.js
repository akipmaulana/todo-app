import React, { Component } from 'react';
import { View } from 'react-native';
import Style from './Style';
import { TextTripleExtraLarge } from '../Text';
import Localization, * as LocalizeKey from 'assets/locales';
// import { Constant } from 'config';

class ViewParallax extends Component {

    render() {
        return (
            <View style={Style.view_parallax} >
                <TextTripleExtraLarge text={ this.props.amount_project } style={{flex: 1}} />
                <TextTripleExtraLarge text={ Localization.t(LocalizeKey.PROJECT_COMMAND) } style={{flex: 3}} />
            </View>
        );
    }
}

export default ViewParallax;