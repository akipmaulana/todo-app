import { StyleSheet, Platform } from "react-native";
import { Color, Font } from "config";

export default StyleSheet.create({
  status_bar: {
    backgroundColor: Color.blue
  },
  nav_container: {
    backgroundColor: Color.white,
    borderBottomWidth: 0
  },
  nav_title: {
    color: Color.blue,
    fontFamily: Font.family.bold,
    alignSelf: "center"
  },
  nav_icon: {
    color: Color.blue,
    fontSize: Font.size.xx_large
  }
});
