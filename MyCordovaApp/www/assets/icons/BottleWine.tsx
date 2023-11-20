import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export const BottleWine = () => (
  <View style={styles.icon}>
    <Svg width="27" height="29" viewBox="0 0 27 29" fill="none">
      <Path
        d="M14.0178 2.1333L10.2678 2.1333C9.92246 2.13336 9.6427 2.41312 9.6427 2.75839L9.64242 4.0083C9.64253 4.35369 9.92221 4.63342 10.2675 4.63339L10.2675 8.86677C8.43395 9.60926 7.14206 11.3983 7.14206 13.4976L7.14206 22.2484C7.14206 23.6295 8.26104 24.7485 9.64215 24.7485L14.6426 24.7487C16.0237 24.7487 17.1427 23.6298 17.1427 22.2486L17.1427 13.4979C17.1427 11.3986 15.8511 9.60981 14.0172 8.86705L14.0172 4.63367C14.3625 4.63367 14.6456 4.35054 14.6456 4.00526V2.75508C14.6415 2.4145 14.3617 2.13468 14.0178 2.1333ZM14.6429 20.8786L9.6427 20.8786L9.6427 14.1388L14.6432 14.139L14.6429 20.8786Z"
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
