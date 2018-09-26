import React from 'react'
import { TextBase } from './TextBase'
import { Font } from "config";

export const TextExtraLarge = props => {

    return (
        <TextBase 
            {...props} 
            fontSize={ Font.size.x_large } />
    );
}