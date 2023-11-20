import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, {
  Rect,
  Path,
  G,
  Defs,
  Filter,
  FeFlood,
  FeColorMatrix,
  FeOffset,
  FeGaussianBlur,
  FeComposite,
  FeBlend,
} from "react-native-svg";

export const MinusSymbol = () => (
  <View style={styles.icon}>
    <Svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <G filter="url(#filter0_d_122_6333)">
        <Rect x="4" y="2" width="26" height="26" fill="white" />
      </G>
      <Path
        d="M15.1719 14.0625H19.4785V16.1621H15.1719V14.0625Z"
        fill="#340068"
      />
      <Defs>
        <Filter
          id="filter0_d_122_6333"
          x="0"
          y="0"
          width="34"
          height="34"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset dy="2" />
          <FeGaussianBlur stdDeviation="2" />
          <FeComposite in2="hardAlpha" operator="out" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <FeBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_122_6333"
          />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_122_6333"
            result="shape"
          />
        </Filter>
      </Defs>
    </Svg>
  </View>
);

const styles = StyleSheet.create({
  icon: {
    // Add any additional styles you need for positioning or styling the SVG
  },
});
