import React, { PropTypes } from 'react'
import {Text} from 'react-native';
import Style from "./Style";

export const TextTripleExtraLarge = props => {

    const { text } = props;

    return (
        <Text numberOfLines={2} adjustsFontSizeToFit={true} style={[{...Style.text_triple_extra_large, ...props.style}]} >
            { text }
        </Text>
    );
}

export default TextTripleExtraLarge;