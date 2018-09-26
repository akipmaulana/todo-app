import React from 'react'
import TextBase from './TextBase'
import { Font } from "config";

export const TextSmall = props => {

    return (
        <TextBase 
            {...props} 
            fontSize={ Font.size.small } />
    );
}

export default TextSmall;