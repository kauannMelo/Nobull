import React, { ReactNode } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import type { JSX } from 'react';

type Props = {
  children: ReactNode;
};

const LoveBackground = ({ children }: Props) => {
  const { width, height } = Dimensions.get('window');

  const centerX = width / 2;
  const centerY = height / 2; // centralizado verticalmente
  const radius = 160; // círculo maior
  const totalItems = 16; // número de elementos no círculo

  const decorItems: JSX.Element[] = [];

  for (let i = 0; i < totalItems; i++) {
    const angle = (i * 360) / totalItems;
    const angleRad = (angle * Math.PI) / 180;

    const x = centerX + radius * Math.cos(angleRad);
    const y = centerY + radius * Math.sin(angleRad);

    const symbol = i % 2 === 0 ? '★' : '❤'; // alterna estrela e coração

    decorItems.push(
      <Text
        key={i}
        style={[
          styles.decor,
          {
            top: y,
            left: x,
          },
        ]}
      >
        {symbol}
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#3d0056', '#9b287b']}
        style={StyleSheet.absoluteFill}
      />

      {/* Ícones decorativos intercalados em círculo */}
      {decorItems}

      {/* Conteúdo principal */}
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
  decor: {
    position: 'absolute',
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.25)', // cinza claro translúcido
  },
});

export default LoveBackground;
