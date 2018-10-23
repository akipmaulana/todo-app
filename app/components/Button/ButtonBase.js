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
    marginTop = 0,
    marginBottom = 0,
    borderRadius = Dimen.button.borderRadius,
    borderColor = Color.amber,
    alignSelf = 'center',
    justifyContent = 'center',
    alignItems = 'center',
    ...props,
}) => {
    const { text } = props;
    const sx = {
        alignSelf,
        justifyContent,
        alignItems,
        color,
        width,
        height,
        marginLeft,
        marginRight,
        marginBottom,
        marginTop,
        borderRadius,
        borderColor,
        ...props,
    }
    return (
        <Button {...props} style={sx}>
            <TextLarge text={text.toUpperCase()} fontFamily={fontFamily} color={color} flex={0} />
        </Button>
    )
}