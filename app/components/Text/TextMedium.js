import React from 'react'
import { TextBase } from './TextBase'
import { Font } from "config";

export const TextMedium = props => {

    return (
        <TextBase 
            {...props} 
            fontSize={ Font.size.medium } />
    );
}