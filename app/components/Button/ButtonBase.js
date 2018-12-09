import React, { PropTypes } from 'react'
import { Button, Text } from 'native-base';
import { ActivityIndicator } from 'react-native';
import { Color, Font, Dimen } from "config";
import { TextBase } from "components/Text";

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
    loading = false,
    textFontSize = Font.size.regular,
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
        <Button disabled={loading} {...props} style={sx}>
            { !loading ? <TextBase fontSize={textFontSize} text={text.toUpperCase()} fontFamily={fontFamily} color={color} flex={0} /> : null }
            <ActivityIndicator 
                size='small'
                animating={loading} 
                style={{
                    alignSelf: 'center', 
                    position: 'absolute', 
                    zIndex: 1
                }} />
        </Button>
    )
}