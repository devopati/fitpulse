import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AUTH_SCREEN, INTRO_SCREEN } from "../constants/route-names";
import { AuthScreen, Intro } from "../screens/auth";

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={INTRO_SCREEN}
        component={Intro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={AUTH_SCREEN}
        component={AuthScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
