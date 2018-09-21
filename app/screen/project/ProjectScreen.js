import React, {Component} from 'react'
import {Container, Content} from 'native-base';
import { NavHeader } from "components/Navigation";
import { ProjectHeaderView } from "./components/View";
import { ProjectCell } from "components/Cell";
import { ButtonCircular } from 'components/Button'
import { Color } from 'config';

export default class ProjectScreen extends Component {
    render() {
        return (
          <Container style={{backgroundColor: Color.light_grey1}}>
            <NavHeader text={ 'PROJECTS' } />
            <ProjectHeaderView amount_project={ 9 } />
            <Content>
              <ProjectCell text={ 'Workout' }/>
              <ProjectCell text={ 'Decorate a Party' }/>
              <ProjectCell text={ 'Go Travel' }/>
              <ProjectCell text={ 'Meeting' }/>
              <ProjectCell text={ 'Hiking' }/>
              <ProjectCell text={ 'Shopping' }/>
            </Content>
            <ButtonCircular/>
          </Container>
        );
    }
}