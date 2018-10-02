import React, {Component} from 'react'
import {Container, Content} from 'native-base'
import { NavHeader } from "components/Navigation"
import { ProjectHeaderView } from "./components/View"
import { FormModal } from './components/Modal'
import ProjectCellContainer from "components/Cell/Project"
import { ButtonFab } from 'components/Button'
import { Color } from 'config'

export default class ProjectScreen extends Component {

    render() {
        return (
          <Container style={{backgroundColor: Color.light_grey1}}>
            <NavHeader text={ 'PROJECTS' } />
            <ProjectHeaderView amount_project={ 9 } />
            <ProjectCellContainer />
            <ButtonFab icon={"add"} onPress={() => {this.refs.formModal.setState({visibleModal:true})}}/>
            <FormModal ref='formModal' />
          </Container>
        );
    }
}