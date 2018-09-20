import React, { PropTypes } from 'react'
import {Header, Left, Body, Right, Title} from 'native-base';
import styles from "./Styles";

const NavHeader = props => {

    const { text } = props;

    return (
        <Header style={styles.nav_container}>
            <Left/>
            <Body>
                <Title style={styles.nav_title}>{text}</Title>
            </Body>
            <Right />
        </Header>
    );
}

export default NavHeader;