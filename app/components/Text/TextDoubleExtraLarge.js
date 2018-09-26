import React from 'react'
import { TextBase } from './TextBase'
import { Font } from "config";

export const TextDoubleExtraLarge = props => {

    return (
        <TextBase 
            {...props} 
            fontSize={ Font.size.xx_large } />
    );
}