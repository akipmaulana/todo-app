import React, { Component } from 'react'
import { Container } from 'native-base'
import { NavHeader } from "components/Navigation"
import { ProjectHeaderView } from "components/View"
import { ProjectFormModal } from 'components/Modal'
import { ButtonFab } from 'components/Button'
import { Color } from 'config'
import ProjectCellContainer from "./container/ProjectCellContainer"

export default class ProjectScreen extends Component {

    buttonAddClickHandler = () => {
      this.refs.formModal.setState({visibleModal:true})
    }

    render() {
        return (
          <Container style={{backgroundColor: Color.light_grey1}}>
            <NavHeader text={ 'PROJECTS' } />
            <ProjectHeaderView amount_project={ 9 } />
            <ProjectCellContainer ref='projectContainer'/>
            <ButtonFab icon={"add"} onPress={this.buttonAddClickHandler}/>
            <ProjectFormModal ref='formModal' />
          </Container>
        );
    }
}