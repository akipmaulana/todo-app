import React, { Component } from 'react';
import { View } from 'react-native';
import Style from './Style';
import { TextTripleExtraLarge } from 'components/Text';
import Localization, * as LocalizeKey from 'assets/locales';

class ProjectHeaderView extends Component {

    render() {
        return (
            <View style={Style.project_header_view} >
                <TextTripleExtraLarge text={ this.props.amount_project } style={{flex: 1}} />
                <TextTripleExtraLarge text={ Localization.t(LocalizeKey.PROJECT_COMMAND) } style={{flex: 3}} />
            </View>
        );
    }
}

export default ProjectHeaderView;