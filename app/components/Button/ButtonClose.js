import React from 'react'
import { ButtonBase } from './ButtonBase'
import Style from "./Style";
import { Color } from "config";

export const ButtonClose = props => {

    return (
        <ButtonBase bordered
            {...props}
            text={"close"}
            alignSelf={'flex-end'}
            marginRight={Style.button_tiny.marginRight}
            color={Color.light_grey4}
            borderColor={Color.light_grey4}
            width={Style.button_tiny.width}
            height={Style.button_tiny.height} />
    );
}