import React, { PropTypes } from 'react'
import { Platform } from "react-native";
import {Header, Left, Body, Right, Title, Button, Text} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Style from "./Style";

export const NavHeader = props => {

    const { navigation, text, isHome = false } = props;

    const iconArrowBack = 'arrow-back'

    const iconName = isHome ? 'menu': iconArrowBack

    const buttonLeft = isHome ? 
        <Text></Text> : 
        (
            <Button transparent onPress={() => navigation.goBack(null)}>
                <MaterialIcons name={iconName} style={Style.nav_icon} />
            </Button>
        )

    return (
        <Header style={Style.nav_container} androidStatusBarColor={ Style.nav_container.backgroundColor }>
            <Left>
                { buttonLeft }
            </Left>
            <Body>
                <Title style={Style.nav_title}>{text}</Title>
            </Body>
            <Right>
                <Button transparent>
                    <MaterialIcons name='filter-list' style={Style.nav_icon} />
                </Button>
            </Right>
        </Header>
    );
}