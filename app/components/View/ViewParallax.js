import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Style from './Style';

class ViewParallax extends Component {

    render() {
        return (
            <View style={Style.view_parallax} >
                <Text style={[{...Style.header_text, fontSize: 64}]} >9</Text>
                <Text style={[{...Style.header_text, marginRight: 8}]} >Of your projects must be complemented</Text>
            </View>
        );
    }
}

export default ViewParallax;