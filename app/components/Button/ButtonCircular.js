import React, { PropTypes } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {View, Button, Icon} from 'native-base';
import Style from "./Style";

export const ButtonCircular = props => {

    const { icon } = props;

    return (
        <View style={Style.button_circular_view}>
            <Button style={Style.button_circular}>
                <MaterialIcons name="add" style={Style.button_circular_icon} />
            </Button>
        </View>
    );
}