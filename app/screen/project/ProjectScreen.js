import React, {Component} from 'react'
import {StyleSheet} from 'react-native';
import {Container, Content, List, ListItem, Text} from 'native-base';
import { NavHeader } from "components/Navigation";
import { ViewParallax } from "components/View";

export default class ProjectScreen extends Component {
    render() {
        return (
          <Container>
            <NavHeader text={ 'PROJECTS' } />
            <Content style={styles.content}>
              <ViewParallax amount_project={ 9 } />
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
    }
  });