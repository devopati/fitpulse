import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { icons } from "../../../../assets/icons";
import { CustomColors } from "../../../custom/custom-colors";

const IconImage = ({ icon = icons.plan, color, focused }) => {
  return (
    <View>
      <Image
        source={icon}
        style={styles.icon}
        tintColor={focused ? CustomColors.blueVariant : CustomColors.black}
      />

      {focused && <View style={styles.focused} />}
    </View>
  );
};

export default IconImage;

const styles = StyleSheet.create({
  icon: {
    height: 28,
    width: 28,
  },
  focused: {
    borderBlockColor: CustomColors.blueVariant,
    borderBottomWidth: 3,
    marginTop: 6,
  },
});
