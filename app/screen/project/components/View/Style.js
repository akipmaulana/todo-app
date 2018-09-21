import {StyleSheet} from "react-native";
import { Color, Dimen } from "config";

export default StyleSheet.create({
    view_parallax: {
        padding: 16,
        backgroundColor: Color.white,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: Dimen.full_width,
        height: Dimen.height(0.2)
    }
})