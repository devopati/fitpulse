import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import ParagraphText from "../../../../components/texts/ParagraphText";
import { CustomColors } from "../../../../custom/custom-colors";

const CategoryContainer = ({ text = "Beginner" }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <ParagraphText textStyle={{ fontSize: 13.5 }}>{text}</ParagraphText>
    </TouchableOpacity>
  );
};

export default CategoryContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: CustomColors.blue,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 22,
  },
});
