import {StyleSheet} from "react-native";
import { Colors, Dimens, Fonts } from "config";

export default StyleSheet.create({
    base_view: {
        backgroundColor: Colors.white,
        width: Dimens.full_width,
        height: Dimens.full_height,
    },
    view_parallax: {
        padding: 16,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        flexDirection: 'row',
        width: Dimens.full_width,
        height: Dimens.height(0.2)
    },
    header_text: {
        fontFamily: Fonts.light,
        fontSize: 32,
        color: Colors.blue,
    }
})