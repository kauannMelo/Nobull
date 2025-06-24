import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  children: ReactNode;
};

const SimpleGradientBackground = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#3d0056', '#9b287b']}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default SimpleGradientBackground;
