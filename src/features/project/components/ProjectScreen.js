import React, {Component} from 'react'
import {StyleSheet} from 'react-native';
import {Container, Header, Left, Body, Right, Title, Content, List, ListItem, Text} from 'native-base';

export default class ProjectScreen extends Component {
    render() {
        return (
          <Container>
            <Header style={styles.nav_container}>
              <Left/>
              <Body>
                <Title style={styles.nav_title}>Projects</Title>
              </Body>
              <Right />
            </Header>
            <Content style={styles.content}>
              <List>
                <ListItem>
                  <Text>Simon Mignolet</Text>
                </ListItem>
                <ListItem>
                  <Text>Nathaniel Clyne</Text>
                </ListItem>
                <ListItem>
                  <Text>Dejan Lovren</Text>
                </ListItem>
              </List>
            </Content>
          </Container>
        );
    }
}

const styles = StyleSheet.create({
    nav_container: {
        backgroundColor: '#FFFFFF'
    },
    nav_title: {
      color: '#29B6F6'
    },
    content: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
  });