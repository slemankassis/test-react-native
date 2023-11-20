import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Line } from "react-native-svg";

export const HamburguerMenu = () => (
  <View style={styles.icon}>
    <Svg width="19" height="15" viewBox="0 0 19 15" fill="none">
      <Line
        x1="1.5"
        y1="1.5"
        x2="17.5"
        y2="1.5"
        stroke="#340068"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <Line
        x1="1.5"
        y1="7.5"
        x2="17.5"
        y2="7.5"
        stroke="#340068"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <Line
        x1="1.5"
        y1="13.5"
        x2="17.5"
        y2="13.5"
        stroke="#340068"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </Svg>
  </View>
);

const styles = StyleSheet.create({
  icon: {
    // Add any additional styles you need for positioning or styling the SVG
  },
});
