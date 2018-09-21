import React, { PropTypes } from 'react'
import {View, Button} from 'native-base';
import Style from "./Style";

export const ButtonCircular = props => {

    const { icon } = props;

    return (
        <View style={Style.button_circular_view}>
            <Button style={Style.button_circular}></Button>
        </View>
    );
}