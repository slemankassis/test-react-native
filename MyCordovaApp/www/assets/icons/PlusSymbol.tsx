import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { G, Path, Defs, Filter, Rect } from "react-native-svg";

export const PlusSymbol = () => (
  <View style={styles.icon}>
    <Svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <G filter="url(#filter0_d_122_6333)">
        <Rect x="4" y="2" width="26" height="26" fill="white" />
      </G>
      <Path
        d="M12.1133 13.877H15.2969V10.5176H17.25V13.877H20.4336V15.7422H17.25V19.0918H15.2969V15.7422H12.1133V13.877Z"
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
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_122_6333"
          />
          <feBlend
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
