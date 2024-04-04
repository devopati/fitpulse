import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CustomColors } from "../../custom/custom-colors";

const HeadingText = ({
  style,
  textStyle,
  children,
  allowFontScaling = false,
}) => {
  return (
    <View style={style}>
      <Text
        allowFontScaling={allowFontScaling}
        style={[styles.text, textStyle]}
      >
        {children}
      </Text>
    </View>
  );
};

export default HeadingText;

const styles = StyleSheet.create({
  text: {
    fontSize: 21,
    fontWeight: "500",
    fontFamily: "orbitronSemiBold",
    color: CustomColors.white,
    textShadowColor: CustomColors.black,
  },
});
