import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomColors } from "../../../custom/custom-colors";
import HeadingText from "../../../components/texts/HeadingText";
import { ScrollView } from "react-native-gesture-handler";
import { containerStyle } from "../../../custom/custom-styles";
import DiscoverTop from "./components/DiscoverTop";
import ParagraphText from "../../../components/texts/ParagraphText";
import PicksContainer from "./components/PicksContainer";
import { images } from "../../../../assets/images";
import PlanContainer from "../workout-plan/components/PlanContainer";
import BodyAssistContainer from "./components/BodyAssistContainer";

const Discover = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={[styles.scrollView]}
        showsVerticalScrollIndicator={false}
      >
        <HeadingText>Discover</HeadingText>

        <DiscoverTop />

        <ParagraphText textStyle={styles.picksTitle}>
          Picks for you
        </ParagraphText>

        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.picksCont}
          >
            <PicksContainer />
            <PicksContainer
              image={images.pick2}
              title="Fit Life"
              time="15 min"
              level="Intermiediate"
            />
            <PicksContainer
              image={images.pick3}
              title="Yoga"
              time="25 min"
              level="Beginner"
            />
          </ScrollView>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.picksCont}
          >
            <PicksContainer
              image={images.pick4}
              title="Couple"
              time="20 min"
              level="Beginner"
            />
            <PicksContainer
              image={images.pick5}
              title="Belly fat burner"
              time="10 min"
              level="Intermiediate"
            />
            <PicksContainer
              image={images.pick6}
              title="Explosive jump"
              time="10 min"
              level="Advanced"
            />
          </ScrollView>
        </View>

        <PlanContainer
          text="Stay active, stay in shape"
          image={images.active}
          disabled
        />

        <ParagraphText textStyle={styles.picksTitle}>
          With Equipment
        </ParagraphText>

        <PlanContainer text="" image={images.gym} />

        <ParagraphText textStyle={styles.picksTitle}>Body assist</ParagraphText>

        <View style={{ gap: 18 }}>
          <BodyAssistContainer />

          <BodyAssistContainer text="Cool down" image={images.cool} />

          <BodyAssistContainer text="Hydration" image={images.water} />

          <BodyAssistContainer text="Nutrition" image={images.nutrition} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232323",
    flex: 1,
    paddingTop: 10,
  },
  scrollView: {
    gap: 25,
    paddingHorizontal: 10,
    paddingBottom: 50,
  },
  picksTitle: {
    fontSize: 15,
  },
  picksCont: {
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 2,
  },
});
