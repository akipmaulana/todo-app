import React, { PropTypes } from 'react'
import { Button, Text } from 'native-base';
import { Color, Font, Dimen } from "config";
import { TextLarge } from "components/Text";

export const ButtonBase = ({
    color = Color.amber,
    fontFamily = Font.family.bold,
    width = Dimen.full_width - Dimen.button.margin * 2,
    height = Dimen.button.height,
    marginLeft = Dimen.button.margin,
    marginRight = Dimen.button.margin,
    borderRadius = Dimen.button.borderRadius,
    borderColor = Color.amber,
    ...props,
}) => {
    const { text } = props;
    const sx = {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color,
        width,
        height,
        marginLeft,
        marginRight,
        borderRadius,
        borderColor,
    }
    return (
        <Button {...props} style={sx}>
            <TextLarge text={text.toUpperCase()} fontFamily={fontFamily} color={color} flex={0} />
        </Button>
    )
}