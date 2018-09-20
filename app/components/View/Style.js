import {StyleSheet} from "react-native";
import { Color, Dimen, Font } from "config";

export default StyleSheet.create({
    base_view: {
        backgroundColor: Color.white,
        width: Dimen.full_width,
        height: Dimen.full_height,
    },
    view_parallax: {
        padding: 16,
        backgroundColor: Color.white,
        justifyContent: 'center',
        flexDirection: 'row',
        width: Dimen.full_width,
        height: Dimen.height(0.2)
    },
    header_text: {
        fontFamily: Font.family.light,
        fontSize: Font.size.regular,
        color: Color.blue,
    }
})