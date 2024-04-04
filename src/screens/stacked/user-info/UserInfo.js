import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeadingText from "../../../components/texts/HeadingText";
import { CustomColors } from "../../../custom/custom-colors";
import ImageView from "./components/ImageView";
import PagerView from "react-native-pager-view";
import Gender from "./Gender";
import UserInfoBtnView from "./components/UserInfoBtnView";
import Age from "./Age";
import Weight from "./Weight";
import ErrorContainer from "../../../components/error/ErrorContainer";

const UserInfo = () => {
  const pagerRef = useRef(null);

  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");

  const [err, setErr] = useState({
    errTitle: "",
    errText: "",
  });

  return (
    <SafeAreaView style={styles.container}>
      {err.errTitle && (
        <ErrorContainer
          errTitle={err.errTitle}
          errText={err.errText}
          onPress={() => setErr({ errTitle: "", errText: "" })}
        />
      )}
      <PagerView
        initialPage={0}
        ref={pagerRef}
        style={{ flex: 1 }}
        scrollEnabled={false}
        // onPageSelected={(e) => setPageNum(e.nativeEvent.position)}
      >
        <View key={"1"}>
          <Gender
            gender={gender}
            setGender={setGender}
            pagerRef={pagerRef}
            setErr={setErr}
          />
        </View>

        <View key={"2"}>
          <Age pagerRef={pagerRef} setAge={setAge} age={age} setErr={setErr} />
        </View>

        <View key={"3"}>
          <Weight
            pagerRef={pagerRef}
            weight={weight}
            setWeight={setWeight}
            setErr={setErr}
          />
        </View>
      </PagerView>
    </SafeAreaView>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: CustomColors.black,
    flex: 1,
  },
});
