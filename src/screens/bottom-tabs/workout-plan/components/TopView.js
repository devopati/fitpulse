import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CustomColors } from "../../../../custom/custom-colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { containerStyle } from "../../../../custom/custom-styles";
import HeadingText from "../../../../components/texts/HeadingText";
import ParagraphText from "../../../../components/texts/ParagraphText";

const TopView = () => {
  const getGreetings = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 0 && currentHour < 12) {
      return "Good morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <HeadingText>Hello David,</HeadingText>
      <ParagraphText>{getGreetings()}</ParagraphText>
    </SafeAreaView>
  );
};

export default TopView;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height / 5.5,
    backgroundColor: CustomColors.blue,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    justifyContent: "space-evenly",
  },
});
