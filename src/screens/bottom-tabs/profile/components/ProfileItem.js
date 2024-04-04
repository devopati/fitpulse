import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { icons } from "../../../../../assets/icons";
import ParagraphText from "../../../../components/texts/ParagraphText";
import { CustomColors } from "../../../../custom/custom-colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProfileItem = ({
  onPress,
  text = "Workout settings",
  icon = icons.muscle,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.iconcontainer}>
          <Image source={icon} style={styles.icon} />
        </View>
        <ParagraphText>{text}</ParagraphText>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    backgroundColor: CustomColors.greyVariant,
    borderRadius: 16,
    gap: 30,
  },
  iconcontainer: {
    padding: 12,
    backgroundColor: CustomColors.blueVariant,
    borderRadius: 18,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
