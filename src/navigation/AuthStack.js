import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  INTRO_SCREEN,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
} from "../constants/route-names";
import { Intro, Login, Register } from "../screens/auth";

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={INTRO_SCREEN}
        component={Intro}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={REGISTER_SCREEN} component={Register} />
      <Stack.Screen name={LOGIN_SCREEN} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
