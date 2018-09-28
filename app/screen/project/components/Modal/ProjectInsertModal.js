import React, { Component } from 'react';
import { View, Form } from 'native-base';
import Style from './Style';
import { TextLarge } from 'components/Text'
import { FormPrimary } from 'components/Form'
import { ButtonPrimary } from 'components/Button'
import Localization, * as LocalizeKey from 'assets/locales'
import Modal from 'react-native-modal'

export class ProjectInsertModal extends Component {

    state = {
        visibleModal: true
    }

    render() {
        return (
            <Modal isVisible={this.state.visibleModal} style={Style.pim_modal} >
                <View style={Style.pim_background_view} >
                    <View style={Style.pim_header_view}>
                        <TextLarge 
                            flex={0}
                            text={ Localization.t(LocalizeKey.CREATE_NEW_PROJECT) } 
                            color={ Style.pim_header_text.color } 
                            fontFamily={ Style.pim_header_text.fontFamily }/>
                    </View>
                    <Form style={Style.pim_form}>
                        <FormPrimary title={"Project Name"} placeholder={"Ex. Watch a movies"}/>
                    </Form>
                    <ButtonPrimary text={"SAVE"} marginBottom={16} onPress={() => {this.setState({visibleModal: false})}} />
                </View>
            </Modal>
        );
    }
}