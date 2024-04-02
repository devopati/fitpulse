import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import HeadingText from "../../../components/texts/HeadingText";
import { CustomColors } from "../../../custom/custom-colors";
import { useNavigation } from "@react-navigation/native";
import { AUTH_SCREEN } from "../../../constants/route-names";

const IntroBtn = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => navigation.navigate(AUTH_SCREEN)}
    >
      <View style={styles.container}>
        <HeadingText>GET FIT</HeadingText>
        <AntDesign name="arrowright" size={24} color={CustomColors.white} />
      </View>
    </TouchableOpacity>
  );
};

export default IntroBtn;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: CustomColors.blue,
    borderRadius: 22,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginHorizontal: 38,
  },
  container: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
