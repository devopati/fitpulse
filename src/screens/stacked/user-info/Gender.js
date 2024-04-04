import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import HeadingText from "../../../components/texts/HeadingText";
import ImageView from "./components/ImageView";
import { ScrollView } from "react-native-gesture-handler";
import { containerStyle } from "../../../custom/custom-styles";
import UserInfoBtnView from "./components/UserInfoBtnView";

const Gender = ({ gender, setGender, pagerRef, setErr }) => {
  return (
    <View style={[styles.container]}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <HeadingText textStyle={styles.title}>
          Tell us about yourself
        </HeadingText>

        <ImageView
          onPress={() => setGender("male")}
          selected={gender === "male"}
        />

        <HeadingText textStyle={{ textAlign: "center", fontSize: 20 }}>
          {"To give you a better \nexperience \nby knowing your gender"}
        </HeadingText>

        <ImageView
          male={false}
          onPress={() => setGender("female")}
          selected={gender === "female"}
        />
      </ScrollView>
      <View style={styles.bottomView}>
        <UserInfoBtnView
          onFwPress={() => {
            if (!gender)
              return setErr({
                errTitle: "Gender missing",
                errText: "Choose your gender to continue the process",
              });
            pagerRef.current.setPage(1);
          }}
          disableBack
        />
      </View>
    </View>
  );
};

export default Gender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  contentContainer: {
    gap: 25,
    paddingBottom: 180,
  },
  title: {
    textAlign: "center",
    fontSize: 26,
    fontFamily: "orbitronBold",
  },
  bottomView: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    paddingBottom: 20,
  },
});
