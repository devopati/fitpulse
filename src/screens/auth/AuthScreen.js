import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import PagerView from "react-native-pager-view";
import { images } from "../../../assets/images";
import { SafeAreaView } from "react-native-safe-area-context";
import Register from "./Register";
import Login from "./Login";

const AuthScreen = () => {
  const pagerRef = useRef(null);
  return (
    <ImageBackground source={images.auth} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <PagerView
          style={{ flex: 1 }}
          initialPage={0}
          ref={pagerRef}
          scrollEnabled={false}
        >
          <View key={"1"}>
            <Register pagerRef={pagerRef} />
          </View>

          <View key={"2"}>
            <Login pagerRef={pagerRef} />
          </View>
        </PagerView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
