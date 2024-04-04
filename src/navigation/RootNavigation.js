import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./MainStack";
import AuthStack from "./AuthStack";
import { useSelector } from "react-redux";

const RootNavigation = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigation;
