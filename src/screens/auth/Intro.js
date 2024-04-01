import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { containerStyle } from "../../custom/custom-styles";
import HeadingText from "../../components/texts/HeadingText";

const Intro = () => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View>
        <HeadingText>FITPULSE</HeadingText>
      </View>

      <View></View>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 44,
  },
});
