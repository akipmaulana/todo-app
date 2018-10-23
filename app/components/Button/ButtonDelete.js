import React from 'react'
import { ButtonBase } from './ButtonBase'
import Style from "./Style";

export const ButtonDelete = props => {

    return (
        <ButtonBase transparent
            {...props}
            text={"delete"}
            color={Style.button_delete.color}
            fontFamily={Style.button_delete.fontFamily} />
    );
}