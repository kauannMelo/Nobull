import React from 'react';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';

type GradientBackgroundProps = {
  style?: StyleProp<ViewStyle>;
};

export default function GradientBackground({ style }: GradientBackgroundProps) {
  return (
    <Svg height="100%" width="100%" style={[StyleSheet.absoluteFill, style]}>
      <Defs>
        <RadialGradient id="grad" cx="50%" cy="50%" r="70%">
          <Stop offset="0%" stopColor="#d3c8d0" />
          <Stop offset="50%" stopColor="#bba3ac" />
          <Stop offset="100%" stopColor="#996fb1" />
        </RadialGradient>
      </Defs>
      <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
    </Svg>
  );
}
