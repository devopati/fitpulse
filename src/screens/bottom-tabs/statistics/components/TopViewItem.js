import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ParagraphText from "../../../../components/texts/ParagraphText";
import HeadingText from "../../../../components/texts/HeadingText";
import { CustomColors } from "../../../../custom/custom-colors";

const TopViewItem = ({ text1 = "KCAL", text2 = "154" }) => {
  return (
    <View style={styles.container}>
      <ParagraphText>{text1}</ParagraphText>
      <HeadingText>{text2}</HeadingText>
    </View>
  );
};

export default TopViewItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: CustomColors.black,
    gap: 15,
    borderRadius: 99999,
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    height: 90,
  },
});
