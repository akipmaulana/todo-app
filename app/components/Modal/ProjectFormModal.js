import React, { Component } from 'react';
import { View, Form } from 'native-base';
import Style from './Style';
import { TextLarge } from 'components/Text'
import { FormPrimary } from 'components/Form'
import { ButtonPrimary, ButtonDelete } from 'components/Button'
import Localization, * as LocalizeKey from 'assets/locales'
import Modal from 'react-native-modal'
import { Field, Formik } from 'formik';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { projectAction, projectSelector, appSelector } from 'myredux';
import { GeneralHelper } from 'helper'

const ProjectForm = (props) => (
    <Formik
        initialValues={{ projectName: props.selectedProject.name || '' }}
        onSubmit={({ projectName }) => {
            props.form.handler(projectName)
        }}
        render={({
            handleSubmit,
        }) => (
            <View style={{...Style.pim_background_view, height: props.isSelectedProject ? 300 : 256}} >
                <View style={Style.pim_header_view}>
                    <TextLarge 
                        flex={0}
                        text={ props.form.title } 
                        color={ Style.pim_header_text.color } 
                        fontFamily={ Style.pim_header_text.fontFamily }/>
                </View>
                <Form style={Style.pim_form}>
                    <Field name="projectName" component={FormPrimary} title={"Project Name"} placeholder={"Ex. Watch a movies"}/>
                </Form>
                <ButtonPrimary text={ props.form.action } marginBottom={16} onPress={handleSubmit} loading={props.form.requesting.addProject || props.form.requesting.updateProject} />
                {
                    props.isSelectedProject ? <ButtonDelete loading={props.form.requesting.deleteProject} onPress={() => {props.form.deletion()}} /> : null
                }
            </View>
        )}
    />
);

class ProjectFormModal extends Component {

    hideFormModal = () => {
        this.props.toogleProjectFormModal(false)
    }

    render() {
        const item = this.props.selectedProject || {}
        const isSelectedProject = !GeneralHelper.isEmpty(this.props.selectedProject)
        const form = {
            title: isSelectedProject ? Localization.t(LocalizeKey.UPDATE_PROJECT) : Localization.t(LocalizeKey.CREATE_NEW_PROJECT),
            action: isSelectedProject ? Localization.t(LocalizeKey.UPDATE) : Localization.t(LocalizeKey.SAVE),
            handler: (name) => isSelectedProject ? this.props.updateProject(item.id, name) : this.props.addProject(name),
            deletion: () => this.props.deleteProject(item.id),
            requesting: this.props.requesting
        } 
        const selectedProject = {
            id: isSelectedProject ? this.props.selectedProject.id : 0,
            name: isSelectedProject ? this.props.selectedProject.name : '',
        }
        return (
            <Modal 
                style={Style.pim_modal} 
                isVisible={this.props.isVisibleModal} 
                onBackdropPress={this.hideFormModal.bind(this)}
            >
                <ProjectForm 
                    form={ form }
                    isSelectedProject={ isSelectedProject }
                    selectedProject={ selectedProject } 
                />
            </Modal>
        );
    }
}

const mapStateToProps = (state, props) =>
    createStructuredSelector({
        requesting: appSelector.getRequesting(state, props),
        isVisibleModal: projectSelector.isVisibleModal(state, props),
        selectedProject: projectSelector.getProjectSelected(state, props),
    });

export default connect(mapStateToProps, projectAction)(ProjectFormModal);