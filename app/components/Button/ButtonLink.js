import React from "react";
import { ButtonSecondary } from "./ButtonSecondary";
import Style from "./Style";
import { Font } from "config";

export const ButtonLink = props => {
  return (
    <ButtonSecondary
      textFontSize={Font.size.small}
      width={Style.button_tiny.width}
      height={Style.button_tiny.height}
      marginTop={0}
      marginBottom={0}
      marginLeft={0}
      marginRight={0}
      {...props}
    />
  );
};
