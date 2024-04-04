import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { images } from "../../../../assets/images";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import ProfileTop from "./components/ProfileTop";
import ProfileItemsContainer from "./components/ProfileItemsContainer";

const Profile = () => {
  return (
    <ImageBackground source={images.profile} style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.innerContainer}
          showsVerticalScrollIndicator={false}
        >
          <ProfileTop />

          <ProfileItemsContainer />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  innerContainer: {
    gap: 40,
    paddingBottom: 50,
  },
});
