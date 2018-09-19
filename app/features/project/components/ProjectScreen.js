import React, {Component} from 'react'
import {StyleSheet, View, Dimensions} from 'react-native';
import {Container, Header, Left, Body, Right, Title, Content, List, ListItem, Text} from 'native-base';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class ProjectScreen extends Component {
    render() {
        return (
          <Container>
            <Header style={styles.nav_container}>
              <Left/>
              <Body>
                <Title style={styles.nav_title}>PROJECTS</Title>
              </Body>
              <Right />
            </Header>
            <Content style={styles.content}>
              <View style={styles.card_header} >
              </View>
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
      color: '#29B6F6',
      fontFamily: 'OpenSans-Regular',
    },
    content: {
      flex: 1,
      backgroundColor: '#F8F8F8',
    },
    card_header: {
      backgroundColor: '#FFFFFF',
      width: width,
      height: height*0.35
    }
  });