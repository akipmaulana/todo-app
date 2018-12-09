import React from "react";
import { ButtonBase } from "./ButtonBase";
import Style from "./Style";
import { Color, Font } from "config";

export const ButtonOpen = props => {
  return (
    <ButtonBase
      bordered
      {...props}
      textFontSize={Font.size.small}
      text={"open"}
      alignSelf={"flex-end"}
      marginRight={Style.button_tiny.marginRight}
      color={Color.amber}
      borderColor={Color.amber}
      width={Style.button_tiny.width}
      height={Style.button_tiny.height}
    />
  );
};
