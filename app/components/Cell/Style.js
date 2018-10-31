import {StyleSheet} from "react-native";
import { Color, Font, Dimen } from "config";

export default StyleSheet.create({
    background_card: {
        backgroundColor: Color.white,
        flexDirection: 'column',
        marginLeft: Dimen.card_margin_side, 
        marginRight: Dimen.card_margin_side,
        borderRadius: Dimen.card_radius,
    },
    flag_last_update: {
        alignSelf: 'flex-start',
        fontSize: Font.size.tiny,
        fontFamily: Font.family.regular,
        color: Color.light_grey4
    },
    time_text: {
        alignSelf: 'flex-start',
        fontSize: Font.size.regular,
        fontFamily: Font.family.regular,
        color: Color.light_grey4
    },
    name_text: {
        alignSelf: 'flex-start',
        fontSize: Font.size.x_large,
        fontFamily: Font.family.regular,
        color: Color.dark_grey2
    },
    badge_cell: {
        borderRadius: Dimen.circular_radius(Dimen.badge_cell, Dimen.badge_cell),
        width: Dimen.badge_cell,
        height: Dimen.badge_cell,
        backgroundColor: Color.amber,
        alignSelf: 'flex-end',
        position: 'absolute', 
        zIndex: 1
    },
    task_badge_cell: {
        borderRadius: Dimen.circular_radius(Dimen.badge_cell, Dimen.badge_cell),
        alignSelf: 'flex-end',
        position: 'absolute',
        zIndex: 1,
        backgroundColor: Color.green, 
        width: 56, 
        height: 20, 
        justifyContent: "center",
        alignItems: "center",
    },
    button_close: {
        alignSelf: 'flex-end',
        position: 'absolute', 
        zIndex: 1
    },
    flag_task_priority: {
        fontSize: Font.size.tiny + 2,
        fontFamily: Font.family.regular,
        color: Color.white
    }
})