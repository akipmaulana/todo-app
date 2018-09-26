import {StyleSheet} from "react-native";
import { Color, Dimen, Font } from "config";

const borderRadius = 16

export default StyleSheet.create({
    pim_background_view: {
        backgroundColor: Color.white,
        flexDirection: 'row',
        width: Dimen.full_width,
        height: 256,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
    },
    pim_header_view: {
        alignItems: 'center',
        backgroundColor: Color.amber,
        width: Dimen.full_width,
        height: 56,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
    },
    pim_header_text: {
        color: Color.white,
        fontFamily: Font.family.bold,
    }
})