import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileItem from "./ProfileItem";
import { icons } from "../../../../../assets/icons";
import { useDispatch } from "react-redux";
import { clearAuthState } from "../../../../redux/slices/authSlice";

const ProfileItemsContainer = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <ProfileItem />

      <ProfileItem icon={icons.settings} text="General settings" />

      <ProfileItem icon={icons.edit} text="Edit profile" />

      <ProfileItem
        icon={icons.logout}
        text="Log out"
        onPress={() => dispatch(clearAuthState())}
      />
    </View>
  );
};

export default ProfileItemsContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(35, 35, 35, 0.9)",
    borderRadius: 20,
    paddingVertical: 38,
    paddingHorizontal: 14,
    gap: 30,
  },
});
