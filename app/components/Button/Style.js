import {StyleSheet, Platform} from "react-native";
import { Color, Font, Dimen } from "config";

export default StyleSheet.create({
    fab_view: {
        backgroundColor: Color.light_grey1,
        width: 64,
        height: 64,
        borderRadius: Dimen.circular_radius(64, 64),
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'center',
        bottom: Platform.OS === 'ios' ? "65%" : "63%"
    },
    fab_button: {
      backgroundColor: Color.amber,
      width: 54,
      height: 54,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: Dimen.circular_radius(54, 54),
    },
    fab_icon: {
        fontSize: Dimen.width(0.07),
        color: Color.white,
        alignSelf: 'center',
    },
    button_tiny: {
        width: 48,
        height: 24,
        marginRight: 0,
    },
    button_delete: {
        color: Color.red,
        fontFamily: Font.family.regular
    }
})