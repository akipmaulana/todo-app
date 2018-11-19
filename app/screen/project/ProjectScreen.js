import React, { Component } from 'react'
import { Container } from 'native-base'
import { NavHeader } from "components/Navigation"
import { ProjectHeaderView } from "components/View"
import { ProjectFormModal } from 'components/Modal'
import { ButtonFab } from 'components/Button'
import { Color } from 'config'
import ProjectCellContainer from "./container/ProjectCellContainer"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { projectAction, projectSelector } from 'myredux';

class ProjectScreen extends Component {

    buttonAddClickHandler = () => {
        this.props.toogleProjectFormModal(true, {})
    }

    render() {
        return (
          <Container style={{backgroundColor: Color.light_grey1}}>
            <NavHeader text={ 'PROJECTS' } isHome={true} />
            <ProjectHeaderView amount_project={ this.props.metaProject.totalRow } />
            <ProjectCellContainer ref='projectContainer' navigation={this.props.navigation}/>
            <ButtonFab icon={"add"} onPress={this.buttonAddClickHandler.bind(this)}/>
            <ProjectFormModal/>
          </Container>
        );
    }
}

const mapStateToProps = (state, props) =>
    createStructuredSelector({
        metaProject: projectSelector.getMetaProject(state, props)
    });

export default connect(mapStateToProps, projectAction)(ProjectScreen);