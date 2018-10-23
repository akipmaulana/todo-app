import React, { Component } from 'react';
import { View, Form } from 'native-base';
import Style from './Style';
import { TextLarge } from 'components/Text'
import { FormPrimary } from 'components/Form'
import { ButtonPrimary } from 'components/Button'
import Localization, * as LocalizeKey from 'assets/locales'
import Modal from 'react-native-modal'
import { Field, Formik } from 'formik';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as action from 'myredux/action';
import * as selector from 'myredux/selector';

const ProjectForm = (props) => (
    <Formik
        initialValues={{ projectName: '' }}
        onSubmit={({ projectName }) => {
            console.log(`projectName: ${projectName}`)
            props.hideFormModal()
            props.addProject()
        }}
        render={({
            handleSubmit,
        }) => (
            <View style={Style.pim_background_view} >
                <View style={Style.pim_header_view}>
                    <TextLarge 
                        flex={0}
                        text={ Localization.t(LocalizeKey.CREATE_NEW_PROJECT) } 
                        color={ Style.pim_header_text.color } 
                        fontFamily={ Style.pim_header_text.fontFamily }/>
                </View>
                <Form style={Style.pim_form}>
                    <Field name="projectName" component={FormPrimary} title={"Project Name"} placeholder={"Ex. Watch a movies"}/>
                </Form>
                <ButtonPrimary text={"SAVE"} marginBottom={16} onPress={handleSubmit} />
            </View>
        )}
    />
);

class ProjectFormModal extends Component {

    hideFormModal = () => {
        this.props.toogleProjectFormModal(false)
    }

    render() {
        return (
            <Modal 
                style={Style.pim_modal} 
                isVisible={this.props.isVisibleModal} 
                onBackdropPress={this.hideFormModal.bind(this)}
            >
                <ProjectForm 
                    hideFormModal={ this.hideFormModal.bind(this) } 
                    addProject={ () => this.props.addProject()} 
                />
            </Modal>
        );
    }
}

const mapStateToProps = (state, props) =>
    createStructuredSelector({
        isVisibleModal: selector.isVisibleModal(state, props)
    });

export default connect(mapStateToProps, action)(ProjectFormModal);