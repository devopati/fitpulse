import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import PagerView from "react-native-pager-view";
import { images } from "../../../assets/images";
import { SafeAreaView } from "react-native-safe-area-context";
import Register from "./Register";
import Login from "./Login";
import LoadingView from "../../components/loaders/LoadingView";
import { useDispatch, useSelector } from "react-redux";
import ErrorContainer from "../../components/error/ErrorContainer";
import { setErrMsg } from "../../redux/slices/authSlice";

const AuthScreen = () => {
  const dispatch = useDispatch();
  const { isLoading, errMsg } = useSelector((state) => state.auth);

  const pagerRef = useRef(null);
  return (
    <ImageBackground source={images.auth} style={{ flex: 1 }}>
      {isLoading && <LoadingView />}
      {errMsg && (
        <ErrorContainer
          errTitle="An error occurred"
          errText={errMsg}
          onPress={() => dispatch(setErrMsg(""))}
        />
      )}
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
