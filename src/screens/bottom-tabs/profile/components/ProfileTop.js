import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeadingText from "../../../../components/texts/HeadingText";
import { images } from "../../../../../assets/images";
import { useSelector } from "react-redux";

const ProfileTop = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <View style={styles.container}>
      <HeadingText>{user?.full_name.slice(0, 11) + "..."}</HeadingText>

      <Image source={images.dp} style={styles.dp} />
    </View>
  );
};

export default ProfileTop;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(35, 35, 35, 0.9)",
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 20,
    padding: 15,
  },
  dp: {
    width: Dimensions.get("window").width / 3.5,
    height: Dimensions.get("window").height / 6.5,
    borderRadius: 9999,
  },
});
