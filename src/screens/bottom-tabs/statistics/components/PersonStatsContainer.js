import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ParagraphText from "../../../../components/texts/ParagraphText";
import HeadingText from "../../../../components/texts/HeadingText";
import { CustomColors } from "../../../../custom/custom-colors";

const PersonStatsContainer = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <View style={styles.statCont}>
          <ParagraphText>Weight</ParagraphText>

          <HeadingText style={styles.textCont}>
            78 <Text style={{ fontSize: 16 }}>kg</Text>
          </HeadingText>
        </View>

        <View style={styles.statCont}>
          <ParagraphText>Height</ParagraphText>

          <HeadingText style={styles.textCont}>
            78 <Text style={{ fontSize: 16 }}>cm</Text>
          </HeadingText>
        </View>
      </View>

      <ParagraphText>BMI</ParagraphText>
    </View>
  );
};

export default PersonStatsContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.7)",
    borderRadius: 20,
    padding: 16,
    paddingVertical: 8,
    marginHorizontal: 15,
    gap: 30,
  },

  statCont: {
    backgroundColor: "rgba(35, 35, 35, 0.9)",
    padding: 18,
    gap: 30,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    width: "48%",
  },
  textCont: {
    borderBottomColor: CustomColors.blue,
    borderBottomWidth: 6,
    paddingBottom: 8,
  },
});
