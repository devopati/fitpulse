import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ParagraphText from "../../../../components/texts/ParagraphText";
import { CustomColors } from "../../../../custom/custom-colors";
import { containerStyle } from "../../../../custom/custom-styles";

const PlanTitle = ({ text1 = "Today's workout plan", text2 = "" }) => {
  const getDate = () => {
    const today = Date.now();
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(today).toLocaleDateString(undefined, options);
  };
  return (
    <View style={[styles.container]}>
      <ParagraphText>{text1}</ParagraphText>
      <ParagraphText textStyle={{ color: CustomColors.blueVariant }}>
        {text2 ? text2 : getDate()}
      </ParagraphText>
    </View>
  );
};

export default PlanTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
});
