import React, { PropTypes } from 'react'
import {Text} from 'react-native';
import { Color, Font } from "config";

export const TextBase = ({
    color = Color.dark_grey2,
    fontSize = Font.size.regular,
    fontFamily = Font.family.light,
    flex = 1,
    ...props,
}) => {
    const { text } = props;
    const sx = {
        flexWrap: 'wrap',
        fontFamily,
        fontSize,
        color,
        flex,
    }
    return (
        <Text numberOfLines={2} adjustsFontSizeToFit={true} {...props} style={sx}>
            { text }
        </Text>
    )
}