import React from 'react'
import { ButtonBase } from './ButtonBase'
import Style from "./Style";

export const ButtonClose = props => {

    return (
        <ButtonBase bordered
            {...props}
            text={"close"}
            alignSelf={'flex-end'}
            marginRight={Style.button_close_project.marginRight}
            color={Style.button_close_project.color}
            borderColor={Style.button_close_project.color}
            width={Style.button_close_project.width}
            height={Style.button_close_project.height} />
    );
}