import React, {Component} from 'react'
import {Container, Content} from 'native-base';
import { NavHeader } from "components/Navigation";
import { TaskHeaderView } from "components/View"
import { ButtonFab } from 'components/Button'
import { Color } from 'config';
import TaskCellContainer from "./container/TaskCellContainer"

export default class TaskFormScreen extends Component {

    render() {
      const project = this.props.navigation.getParam('task', {})
      return (
        <Container style={{backgroundColor: Color.light_grey1}}>
          <NavHeader text={ 'Create new task'.toUpperCase() } pop={true} navigation={this.props.navigation} />
        </Container>
      );
    }
}