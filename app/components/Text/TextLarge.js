import React from 'react'
import TextBase from './TextBase'
import { Font } from "config";

export const TextLarge = props => {

    return (
        <TextBase 
            {...props} 
            fontSize={ Font.size.large } />
    );
}

export default TextLarge;