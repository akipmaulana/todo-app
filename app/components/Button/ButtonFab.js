import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {View, Button} from 'native-base';
import Style from "./Style";

export const ButtonFab = props => {

    const { icon } = props;

    return (
        <View style={Style.fab_view}>
            <Button style={Style.fab_button} onPress={props.onPress}>
                <MaterialIcons name={icon} style={Style.fab_icon} />
            </Button>
        </View>
    );
}