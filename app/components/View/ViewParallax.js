import React, { Component } from 'react';
import { View } from 'react-native';
import Styles from './Styles';

class ViewParallax extends Component {

    render() {
        return (
            <View style={Styles.view_parallax} >
                {/* <Text style={[{...Styles.header_text, fontSize: 64}]} >9</Text> */}
                {/* <Text style={Styles.fontSize} >Of your projects must be complemented</Text> */}
            </View>
        );
    }
}

export default ViewParallax;