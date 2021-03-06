import React, {Component} from 'react'
import {Container, Content} from 'native-base';
import { NavHeader } from "components/Navigation";
import { Color } from 'config';

export default class HistoryScreen extends Component {
    render() {
        return (
          <Container style={{backgroundColor: Color.light_grey1}}>
            <NavHeader text={ 'HISTORY' } />
            <Content>
            </Content>
          </Container>
        );
    }
}