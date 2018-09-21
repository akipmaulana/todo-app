import React, {Component} from 'react'
import {StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import { NavHeader } from "components/Navigation";
import { ViewParallax } from "./components/View";
import { ProjectCell } from "components/Cell";

export default class ProjectScreen extends Component {
    render() {
        return (
          <Container>
            <NavHeader text={ 'PROJECTS' } />
            <ViewParallax amount_project={ 9 } />
            <Content style={styles.content}>
              <ProjectCell text={ 'Workout' }/>
              <ProjectCell text={ 'Decorate a Party' }/>
              <ProjectCell text={ 'Go Travel' }/>
              <ProjectCell text={ 'Meeting' }/>
              <ProjectCell text={ 'Hiking' }/>
              <ProjectCell text={ 'Shopping' }/>
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