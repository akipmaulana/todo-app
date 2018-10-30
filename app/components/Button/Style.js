import {StyleSheet} from "react-native";
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
        bottom: Dimen.height(0.65),
        //marginTop: Dimen.project_header_height() + 64/2,
    },
    fab_button: {
      backgroundColor: Color.amber,
      fontFamily: Font.family.regular,
      width: 54,
      height: 54,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: Dimen.circular_radius(54, 54),
    },
    fab_icon: {
        fontSize: Font.size.xxx_large,
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