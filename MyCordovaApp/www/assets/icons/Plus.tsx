import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Circle, Path, G, Defs } from "react-native-svg";

export const Plus = () => (
  <View style={styles.icon}>
    <Svg width="38" height="38" viewBox="0 0 38 38" fill="none">
      <Defs>
        <G id="filter0_d_122_6333" filter="url(#filter0_d_122_6333)">
          <Circle cx="19" cy="15" r="15" fill="white" />
        </G>
        <Path
          id="filter1_d_122_6333"
          d="M12.6699 13.8154H17.4453V8.77637H20.375V13.8154H25.1504V16.6133H20.375V21.6377H17.4453V16.6133H12.6699V13.8154Z"
          fill="#340068"
        />
      </Defs>
      <G filter="url(#filter0_d_122_6333)">
        <Circle cx="19" cy="15" r="15" fill="white" />
      </G>
      <Path
        d="M12.6699 13.8154H17.4453V8.77637H20.375V13.8154H25.1504V16.6133H20.375V21.6377H17.4453V16.6133H12.6699V13.8154Z"
        fill="#340068"
      />
    </Svg>
  </View>
);

const styles = StyleSheet.create({
  icon: {
    // Add any additional styles you need for positioning or styling the SVG
  },
});
