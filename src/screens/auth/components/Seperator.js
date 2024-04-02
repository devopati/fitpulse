import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import { CustomColors } from "../../../custom/custom-colors";

const Seperator = () => {
  return (
    <View style={styles.container}>
      <Octicons name="dot-fill" size={30} color={CustomColors.blue} />
      <View style={styles.line} />
      <Octicons name="dot-fill" size={30} color={CustomColors.blue} />
    </View>
  );
};

export default Seperator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: -10,
    justifyContent: "center",
    marginTop: 5,
  },
  line: {
    width: Dimensions.get("window").width - 90,
    height: 3,
    backgroundColor: CustomColors.blue,
    marginHorizontal: 8,
  },
});
