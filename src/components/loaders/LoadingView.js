import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CustomColors } from "../../custom/custom-colors";

const LoadingView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerCont}>
        <ActivityIndicator size={60} color={CustomColors.blue} />
      </View>
    </View>
  );
};

export default LoadingView;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
});
