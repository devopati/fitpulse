import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HeadingText = ({ style, textStyle, children, allowFontScaling }) => {
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
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "orbitronSemiBold",
  },
});
