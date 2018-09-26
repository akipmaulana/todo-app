import React, { PropTypes } from 'react'
import {Header, Left, Body, Right, Title} from 'native-base';
import Style from "./Style";

export const NavHeader = props => {

    const { text } = props;

    return (
        <Header style={Style.nav_container} androidStatusBarColor={ Style.nav_container.backgroundColor }>
            <Left/>
            <Body>
                <Title style={Style.nav_title}>{text}</Title>
            </Body>
            <Right />
        </Header>
    );
}