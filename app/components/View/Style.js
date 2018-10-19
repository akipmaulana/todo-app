import {StyleSheet} from "react-native";
import { Color, Dimen, Font } from "config";

export default StyleSheet.create({
    base_view: {
        backgroundColor: Color.white,
        width: Dimen.full_width,
        height: Dimen.full_height,
    },
    project_header_view: {
        padding: 16,
        backgroundColor: Color.white,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: Dimen.full_width,
        height: Dimen.project_header_height()
    },
    project_header_view_text: {
        color: Color.blue
    }
})