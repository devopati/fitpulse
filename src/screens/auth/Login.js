import { Keyboard, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthTop from "./components/AuthTop";
import { containerStyle } from "../../custom/custom-styles";
import HeadingText from "../../components/texts/HeadingText";
import AuthButton from "./components/AuthButton";
import AuthInputField from "./components/AuthInputField";
import { TouchableOpacity } from "react-native-gesture-handler";
import ParagraphText from "../../components/texts/ParagraphText";
import { STACK_SCREENS, USER_INFO_SCREEN } from "../../constants/route-names";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import loginUser from "../../redux/services/auth/login-user";

const Login = ({ pagerRef }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPass, setShowPass] = useState(true);

  const [err, setErr] = useState({
    errTitle: "",
    errText: "",
  });

  const onSubmitHandler = async () => {
    if (!email || !password)
      return setErr({
        errTitle: "Empty fields",
        errText:
          "All fields are required. \nEnsure all fields are filled before signing up.",
      });

    const data = {
      email,
      password,
    };

    Keyboard.dismiss();

    await dispatch(loginUser(data));
  };
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.top}>
        <AuthTop
          text="SIGNUP"
          onPress={() => pagerRef.current.setPageWithoutAnimation(0)}
        />
        <AuthTop active />
      </View>

      <View style={styles.textView}>
        <HeadingText textStyle={styles.text}>
          {"Good to see you \nback."}
        </HeadingText>
      </View>

      <View style={styles.bottomView}>
        <AuthInputField
          inputMode={"email"}
          value={email}
          onChangeText={(email) => setEmail(email)}
          autoCapitalize={"none"}
        />

        <AuthInputField
          placeholder="Password"
          value={password}
          onChangeText={(pass) => setPassword(pass)}
          secureTextEntry={showPass}
          autoCapitalize={"none"}
        />

        <View style={styles.bottomBtns}>
          <TouchableOpacity
            style={styles.forgotPass}
            onPress={() => setShowPass(!showPass)}
          >
            <ParagraphText>Show password</ParagraphText>
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.forgotPass}>
            <ParagraphText>Forgot password?</ParagraphText>
          </TouchableOpacity> */}
        </View>
        <AuthButton text="Login" onPress={onSubmitHandler} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    gap: 50,
  },
  top: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 34,
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  textView: {
    gap: 35,
    paddingTop: 40,
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    fontFamily: "orbitronBold",
  },
  bottomView: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 8,
    gap: 20,
  },
  forgotPass: {
    alignSelf: "flex-end",
    paddingVertical: 8,
  },
  bottomBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
  },
});
