import {StyleSheet} from "react-native";
import { Color, Font, Dimen } from "config";

export default StyleSheet.create({
    button_circular_view: {
        backgroundColor: Color.light_grey1,
        width: 64,
        height: 64,
        borderRadius: Dimen.circular_radius(64, 64),
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'center',
        marginTop: Dimen.project_header_height() + 64/2 + 4,
    },
    button_circular: {
      backgroundColor: Color.amber,
      fontFamily: Font.family.regular,
      width: 54,
      height: 54,
      alignSelf: 'center',
      borderRadius: Dimen.circular_radius(54, 54),
    },
})