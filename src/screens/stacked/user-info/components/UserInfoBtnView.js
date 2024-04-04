import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SimpleLineIcons, Octicons } from "@expo/vector-icons";
import { CustomColors } from "../../../../custom/custom-colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import HeadingText from "../../../../components/texts/HeadingText";
import { containerStyle } from "../../../../custom/custom-styles";

const UserInfoBtnView = ({ onFwPress, onBackPress, disableBack = false }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {disableBack ? (
        <Text></Text>
      ) : (
        <TouchableOpacity style={styles.goback} onPress={onBackPress}>
          <SimpleLineIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.btnCont} onPress={onFwPress}>
        <View style={styles.btnView}>
          <HeadingText>{"Next"}</HeadingText>
          <Octicons name="chevron-right" size={24} color={CustomColors.white} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UserInfoBtnView;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goback: {
    backgroundColor: CustomColors.grey,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  btnCont: {
    backgroundColor: CustomColors.blue,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 24,
  },
  btnView: {
    flexDirection: "row",
    gap: 14,
    alignItems: "center",
    justifyContent: "center",
  },
});
