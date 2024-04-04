import { Keyboard, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthTop from "./components/AuthTop";
import { containerStyle } from "../../custom/custom-styles";
import HeadingText from "../../components/texts/HeadingText";
import AuthButton from "./components/AuthButton";
import AuthInputField from "./components/AuthInputField";
import { TouchableOpacity } from "react-native-gesture-handler";
import ParagraphText from "../../components/texts/ParagraphText";
import { useNavigation } from "@react-navigation/native";
import LoadingView from "../../components/loaders/LoadingView";
import ErrorContainer from "../../components/error/ErrorContainer";
import { useDispatch, useSelector } from "react-redux";
import registerUser from "../../redux/services/auth/register-user";

const Register = ({ pagerRef }) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [showPass, setShowPass] = useState(true);

  const [err, setErr] = useState({
    errTitle: "",
    errText: "",
  });

  const onSubmitHandler = async () => {
    if (!fullName || !email || !password || !password2)
      return setErr({
        errTitle: "Empty fields",
        errText:
          "All fields are required. \nEnsure all fields are filled before signing up.",
      });

    if (password !== password2)
      return setErr({
        errTitle: "Password mis-match",
        errText:
          "The passwords do not match, ensure you enter matching password to continue",
      });

    const data = {
      full_name: fullName,
      email,
      password,
    };
    Keyboard.dismiss();
    await dispatch(registerUser(data));
  };
  return (
    <View style={[styles.container, containerStyle]}>
      {err.errTitle && (
        <ErrorContainer
          errTitle={err.errTitle}
          errText={err.errText}
          onPress={() => setErr({ errTitle: "", errText: "" })}
        />
      )}
      <View style={styles.top}>
        <AuthTop onPress={() => pagerRef.current.setPageWithoutAnimation(1)} />
        <AuthTop text="SIGNUP" active />
      </View>

      <View style={styles.textView}>
        <HeadingText textStyle={styles.text}>
          {"Welcome \nto \nFITPULSE"}
        </HeadingText>

        <HeadingText textStyle={styles.text}>
          {"Let's \nget started"}
        </HeadingText>
      </View>

      <View style={styles.bottomView}>
        <AuthInputField
          placeholder="Full name"
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />

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

        <AuthInputField
          placeholder="Confirm password"
          value={password2}
          onChangeText={(pass2) => setPassword2(pass2)}
          secureTextEntry={showPass}
          autoCapitalize={"none"}
        />

        <TouchableOpacity
          style={styles.forgotPass}
          onPress={() => setShowPass(!showPass)}
        >
          <ParagraphText>Show password</ParagraphText>
        </TouchableOpacity>
        <AuthButton onPress={onSubmitHandler} />
      </View>
    </View>
  );
};

export default Register;

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
    paddingTop: 20,
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
    alignSelf: "flex-start",
    paddingLeft: 18,
    paddingVertical: 8,
  },
});
