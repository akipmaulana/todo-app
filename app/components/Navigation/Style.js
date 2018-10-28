import {StyleSheet} from "react-native";
import { Color, Font } from "config";

export default StyleSheet.create({
    nav_container: {
        backgroundColor: Color.white,
        borderBottomWidth: 0,
    },
    nav_title: {
        color: Color.blue,
        fontFamily: Font.family.light,
    },
    nav_icon: {
        color: Color.blue,
        fontSize: Font.size.xx_large,
    }
})