import React, { PropTypes } from "react";
import { Platform } from "react-native";
import { Header, Left, Body, Right, Title, Button, Text } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Style from "./Style";

export const NavHeader = props => {
  const { navigation, text, isHome = false, pop = false } = props;

  const iconArrowBack = "arrow-back";
  const iconClose = "close";

  const iconName = pop ? iconClose : iconArrowBack;

  const leftContent = isHome ? (
    <Text />
  ) : (
    <Button transparent onPress={() => navigation.goBack(null)}>
      <MaterialIcons name={iconName} style={Style.nav_icon} />
    </Button>
  );

  const centerContent = pop ? (
    <Text />
  ) : (
    <Text style={Style.nav_title}>{text}</Text>
  );

  const rightContent = pop ? (
    <Text style={{...Style.nav_title, textAlign:'right',}}>{text}</Text>
  ) : (
    <Button transparent>
      <MaterialIcons name="filter-list" style={Style.nav_icon} />
    </Button>
  );

  return (
    <Header
      style={Style.nav_container}
      androidStatusBarColor={Style.status_bar.backgroundColor}
    >
      <Left
        style={{
          flex: 1
        }}
      >
        {leftContent}
      </Left>
      <Body
        style={{
          flex: 1
        }}
      >
        {centerContent}
      </Body>
      <Right
        style={{
          flex: 1
        }}
      >
        {rightContent}
      </Right>
    </Header>
  );
};
