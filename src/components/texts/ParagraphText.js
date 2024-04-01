import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ParagraphText = ({ style, textStyle, children, numberOflines }) => {
  return (
    <View style={style}>
      <Text numberOfLines={numberOflines} style={[styles.text, textStyle]}>
        {children}
      </Text>
    </View>
  );
};

export default ParagraphText;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: "orbitronRegular",
  },
});
