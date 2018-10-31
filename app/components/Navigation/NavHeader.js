import React, { PropTypes } from 'react'
import { Platform } from "react-native";
import {Header, Left, Body, Right, Title, Button} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Style from "./Style";

export const NavHeader = props => {

    const { text, isHome = false } = props;

    const iconArrowBack = 'arrow-back'

    const iconName = isHome ? 'menu': iconArrowBack

    return (
        <Header style={Style.nav_container} androidStatusBarColor={ Style.nav_container.backgroundColor }>
            <Left>
                <Button transparent>
                    <MaterialIcons name={iconName} style={Style.nav_icon} />
                </Button>
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