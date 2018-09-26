import React from 'react'
import TextBase from './TextBase'
import { Font } from "config";

export const TextTripleExtraLarge = props => {

    return (
        <TextBase 
            {...props} 
            fontSize={ Font.size.xxx_large } />
    );
}

export default TextTripleExtraLarge;