import React, { PropTypes } from 'react'
import TextBase from './TextBase'
import { Color, Font } from "config";

export const TextTripleExtraLarge = props => {

    return (
        <TextBase 
            {...props} 
            color={ Color.blue }
            fontSize={ Font.size.xxx_large } />
    );
}

export default TextTripleExtraLarge;