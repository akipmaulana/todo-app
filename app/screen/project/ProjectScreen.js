import React, { Component } from 'react'
import { Container } from 'native-base'
import { NavHeader } from "components/Navigation"
import { ProjectHeaderView } from "components/View"
import { ProjectFormModal } from 'components/Modal'
import { ButtonFab } from 'components/Button'
import { Color } from 'config'
import ProjectCellContainer from "./container/ProjectCellContainer"
import { connect } from 'react-redux';
import { projectAction } from 'myredux';

class ProjectScreen extends Component {

    buttonAddClickHandler = () => {
        this.props.toogleProjectFormModal(true, {})
    }

    render() {
        return (
          <Container style={{backgroundColor: Color.light_grey1}}>
            <NavHeader text={ 'PROJECTS' } />
            <ProjectHeaderView amount_project={ 9 } />
            <ProjectCellContainer ref='projectContainer'/>
            <ButtonFab icon={"add"} onPress={this.buttonAddClickHandler.bind(this)}/>
            <ProjectFormModal/>
          </Container>
        );
    }
}

export default connect(null, projectAction)(ProjectScreen);