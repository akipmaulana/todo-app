import React, { PropTypes } from 'react'
import {Header, Left, Body, Right, Title} from 'native-base';
import Styles from "./Styles";

export const NavHeader = props => {

    const { text } = props;

    return (
        <Header style={Styles.nav_container}>
            <Left/>
            <Body>
                <Title style={Styles.nav_title}>{text}</Title>
            </Body>
            <Right />
        </Header>
    );
}