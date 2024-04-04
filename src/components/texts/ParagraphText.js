import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CustomColors } from "../../custom/custom-colors";

const ParagraphText = ({
  style,
  textStyle,
  children,
  numberOflines,
  allowFontScaling = false,
}) => {
  return (
    <View style={style}>
      <Text
        numberOfLines={numberOflines}
        allowFontScaling={allowFontScaling}
        style={[styles.text, textStyle]}
      >
        {children}
      </Text>
    </View>
  );
};

export default ParagraphText;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: "orbitronMedium",
    color: CustomColors.white,
  },
});
