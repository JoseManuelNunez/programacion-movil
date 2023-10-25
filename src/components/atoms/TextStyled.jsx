import React from "react";
import { Text } from "react-native";
import { commonStyles } from './style.js';

export default function StyledText ({align, children, color, fontSize, fontWeight, style, ...restOfProps}) {
    const textStyle = [
        commonStyles.text,
        align === 'center' && commonStyles.textAlignCenter,
        fontWeight === 'bold' && commonStyles.bold,
        style
    ];

    return (
        <Text style={textStyle} {...restOfProps}>
            {children}
        </Text>   
    );
}