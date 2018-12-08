import { Platform } from "react-native";

export const Font = {
    family: {
        bold: "OpenSans-Bold",
        bold_italic: 'OpenSans-BoldItalic',
        extra_bold: 'OpenSans-ExtraBold',
        extra_bold_italic: 'OpenSans-ExtraBoldItalic',
        italic: 'OpenSans-Italic',
        light: 'OpenSans-Light',
        light_italic: 'OpenSans-LightItalic',
        regular: 'OpenSans-Regular',
        semi_bold: 'OpenSans-SemiBold',
        semi_bold_italic: 'OpenSans-SemiBoldItalic',
    },
    size: {
        tiny: 7,
        small: 11,
        medium: 13,
        regular: 15,
        large: Platform.os === 'ios' ? 17 : 9,
        x_large: Platform.os === 'ios' ? 24 : 16,
        xx_large: Platform.os === 'ios' ? 32 : 24,
        xxx_large: Platform.os === 'ios' ? 78 : 32,
    }
}