import React, {Component} from 'react'
import {StyleSheet, View, Dimensions} from 'react-native';
import {Container, Content, List, ListItem, Text} from 'native-base';
import NavHeader from "components";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class ProjectScreen extends Component {
    render() {
        return (
          <Container>
            <NavHeader text={ 'PROJECTS' } />
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