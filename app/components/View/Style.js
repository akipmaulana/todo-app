import {StyleSheet} from "react-native";
import { Color, Dimen, Font } from "config";

export default StyleSheet.create({
    base_view: {
        backgroundColor: Color.white,
        width: Dimen.full_width,
        height: Dimen.full_height,
    },
    header_view: {
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        marginBottom: 8,
        backgroundColor: Color.white,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: Dimen.full_width,
        height: Dimen.project_header_height()
    },
    header_separator_vertical: { 
        backgroundColor: Color.blue, 
        width: 1, 
        height: Dimen.height(0.1), 
        marginBottom: 32
    },
    primary_header_view_text: {
        color: Color.blue,
    },
    secondary_header_view_text: {
        color: Color.light_grey4,
    },
})