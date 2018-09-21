import {StyleSheet} from "react-native";
import { Color, Dimen } from "config";

export default StyleSheet.create({
    project_header_view: {
        padding: 16,
        backgroundColor: Color.white,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: Dimen.full_width,
        height: Dimen.height(0.2)
    }
})