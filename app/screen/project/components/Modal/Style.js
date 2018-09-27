import {StyleSheet} from "react-native";
import { Color, Dimen, Font } from "config";

const borderRadius = 16

export default StyleSheet.create({
    pim_background_view: {
        backgroundColor: Color.white,
        flexDirection: 'column',
        width: Dimen.full_width,
        height: 256,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
    },
    pim_header_view: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.amber,
        width: Dimen.full_width,
        height: 56,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
    },
    pim_header_text: {
        color: Color.white,
        fontFamily: Font.family.bold,
    },
    pim_form: {
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        margin: Dimen.form.title.margin,
        backgroundColor: Color.light_grey1,
    },
})