import React, {Component} from 'react'
import {Container, Content} from 'native-base';
import { NavHeader } from "components/Navigation";
import { TaskHeaderView } from "components/View"
import { ButtonFab } from 'components/Button'
import { Color } from 'config';

export default class TaskScreen extends Component {

    buttonAddClickHandler = () => {
      
    }

    render() {
      const project = this.props.navigation.getParam('project', {})
      return (
        <Container style={{backgroundColor: Color.light_grey1}}>
          <NavHeader text={ project.name } />
          <TaskHeaderView />
          <ButtonFab icon={"add"} onPress={this.buttonAddClickHandler.bind(this)} />
        </Container>
      );
    }
}