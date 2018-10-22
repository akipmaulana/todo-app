import React, { Component } from 'react';
import {
    View,
    Modal,
    ActivityIndicator
  } from 'react-native';
import Style from './Style';

export const LoadingPrimary = props => {

    const {
        loading,
        ...attributes
      } = props;
    
      return (
        <Modal
          transparent={true}
          animationType={'none'}
          visible={loading}
          onRequestClose={() => {console.log('close modal')}}>
          <View style={Style.modalBackground}>
            <View style={Style.activityIndicatorWrapper}>
              <ActivityIndicator
                animating={loading} />
            </View>
          </View>
        </Modal>
      )
}