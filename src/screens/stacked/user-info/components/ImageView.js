import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { images } from "../../../../../assets/images";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CustomColors } from "../../../../custom/custom-colors";

const ImageView = ({ male = true, selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={male ? images.male : images.female}
          style={styles.image}
        />

        <View
          style={[
            styles.gender,
            !male && styles.genderFemale,
            !selected && { backgroundColor: CustomColors.grey },
          ]}
        >
          <Ionicons
            name={male ? "male-sharp" : "female-sharp"}
            size={96}
            color="black"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ImageView;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  image: {
    height: Dimensions.get("window").height / 3,
    width: Dimensions.get("window").width - 50,
    alignSelf: "center",
    borderRadius: 999,
  },
  gender: {
    position: "absolute",
    backgroundColor: CustomColors.blue,
    left: 36,
    top: 50,
    borderRadius: 24,
  },
  genderFemale: {
    top: 106,
    left: "60%",
    backgroundColor: "#E789FF",
  },
});
