import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {View, Button, Icon} from 'native-base';
import Style from "./Style";

export const ButtonFab = props => {

    const { icon } = props;

    return (
        <View style={Style.fab_view}>
            <Button style={Style.fab_button}>
                <MaterialIcons name="add" style={Style.fab_icon} />
            </Button>
        </View>
    );
}