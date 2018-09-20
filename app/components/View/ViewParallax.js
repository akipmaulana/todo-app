import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Style from './Style';
import { Font } from 'config';

class ViewParallax extends Component {

    render() {
        return (
            <View style={Style.view_parallax} >
                <Text style={[{...Style.header_text, fontSize: Font.size.xxx_large}]} >{ this.props.amount_project }</Text>
                <Text style={[{...Style.header_text}]} >Of your projects must be complemented</Text>
            </View>
        );
    }
}

export default ViewParallax;