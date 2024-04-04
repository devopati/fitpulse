import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ParagraphText from "../../../../components/texts/ParagraphText";
import { CustomColors } from "../../../../custom/custom-colors";
import { icons } from "../../../../../assets/icons";
import HeadingText from "../../../../components/texts/HeadingText";

const CalenderShow = () => {
  const calenderData = [
    {
      day: "S",
      date: 1,
    },
    {
      day: "M",
      date: 2,
    },
    {
      day: "T",
      date: 3,
    },
    {
      day: "W",
      date: 4,
    },
    {
      day: "T",
      date: 5,
    },
    {
      day: "F",
      date: 6,
    },
    {
      day: "S",
      date: 7,
    },
  ];

  const generateCalenderData = () => {
    const today = Date.now();
    let calenderData = { S: 0, M: 1, T: 2, W: 3, T: 4, F: 5, S: 6 };
    let dayDate = new Date(today);

    return dayDate.getDate();
  };

  return (
    <View style={styles.container}>
      <ParagraphText>April</ParagraphText>
      <View style={styles.days}>
        {calenderData.map((item, index) => {
          return (
            <View key={index} style={styles.calenderData}>
              <ParagraphText>{item.day}</ParagraphText>
              <ParagraphText>{item.date}</ParagraphText>
            </View>
          );
        })}
      </View>
      <View style={styles.line} />

      <View style={styles.bottomView}>
        <Image source={icons.fire} style={styles.fire} />
        <HeadingText>0</HeadingText>
        <ParagraphText>Day Streak</ParagraphText>
      </View>
    </View>
  );
};

export default CalenderShow;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.9)",
    borderRadius: 20,
    padding: 26,
    gap: 20,
    marginHorizontal: 15,
  },
  days: {
    flexDirection: "row",
    gap: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  calenderData: {
    alignItems: "center",
    gap: 12,
  },
  line: {
    borderBottomWidth: 3,
    borderBottomColor: CustomColors.blue,
    marginHorizontal: 15,
  },
  fire: {
    width: 33,
    height: 33,
    tintColor: "#DD2B04",
  },
  bottomView: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 10,
  },
});
