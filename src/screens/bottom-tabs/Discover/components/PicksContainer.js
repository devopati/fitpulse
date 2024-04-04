import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { images } from "../../../../../assets/images";
import { CustomColors } from "../../../../custom/custom-colors";
import ParagraphText from "../../../../components/texts/ParagraphText";

const PicksContainer = ({
  image = images.pick1,
  title = "HIIT core workout",
  time = "10 min",
  level = "Beginner",
}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <View style={styles.textView}>
        <ParagraphText>{title}</ParagraphText>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <ParagraphText textStyle={{ fontSize: 13 }}>{time}</ParagraphText>
          <ParagraphText textStyle={{ fontSize: 13 }}>{level}</ParagraphText>
        </View>
      </View>
    </View>
  );
};

export default PicksContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: CustomColors.greyVariant,
    borderRadius: 20,
    width: Dimensions.get("window").width - 75,
    padding: 5,
    gap: 30,
  },
  image: {
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 3.5,
    borderRadius: 20,
  },
  textView: {
    gap: 20,
  },
});
