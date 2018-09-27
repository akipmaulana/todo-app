import React from 'react'
import { Item, Label, Input } from 'native-base'
import { Color, Font, Dimen } from "config"

export const FormBase = ({
    marginLeft = 0,
    labelFontFamily = Font.family.light,
    labelFontSize = Font.size.regular,
    labelColor = Color.dark_grey1,
    inputFontFamily = Font.family.regular,
    inputFontSize = Font.size.regular,
    inputColor = Color.dark_grey2,
    inputPlaceholderColor = Color.light_grey3,
    ...props,
}) => {
    const { title, placeholder } = props;

    const defaultStyleItem = {
        marginLeft,
    }

    const defaultStyleLabel = {
        fontFamily: labelFontFamily,
        fontSize: labelFontSize,
        color: labelColor,
    }

    const defaultStyleInput = {
        fontFamily: inputFontFamily,
        fontSize: inputFontSize,
        color: inputColor,
    }

    return (
        <Item stackedLabel {...props} style={defaultStyleItem}>
            <Label style={defaultStyleLabel}>{title}</Label>
            <Input 
                placeholder={placeholder} 
                style={defaultStyleInput} 
                placeholderTextColor={inputPlaceholderColor}/>
        </Item>
    )
}