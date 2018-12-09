import { Platform } from "react-native";
import { Dimen } from "./Dimen";

export const Font = {
  family: {
    bold: "OpenSans-Bold",
    bold_italic: "OpenSans-BoldItalic",
    extra_bold: "OpenSans-ExtraBold",
    extra_bold_italic: "OpenSans-ExtraBoldItalic",
    italic: "OpenSans-Italic",
    light: "OpenSans-Light",
    light_italic: "OpenSans-LightItalic",
    regular: "OpenSans-Regular",
    semi_bold: "OpenSans-SemiBold",
    semi_bold_italic: "OpenSans-SemiBoldItalic"
  },
  size: {
    small: Dimen.width(0.023),
    regular: Dimen.width(0.035),
    large: Dimen.width(0.04),
    x_large: Dimen.width(0.05),
    xx_large: Dimen.width(0.055),
    xxx_large: Dimen.width(0.065)
  }
};
