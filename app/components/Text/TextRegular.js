import React from 'react'
import { TextBase } from './TextBase'
import { Font } from "config";

export const TextRegular = props => {

    return (
        <TextBase 
            {...props} 
            fontSize={ Font.size.regular } />
    );
}