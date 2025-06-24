import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  mensagem: string;
  lado: 'esquerda' | 'direita'; // quem enviou: esquerda = recebeu, direita = enviou
};

export default function BalaoMensagem({ mensagem, lado }: Props) {
  const isLeft = lado === 'esquerda';

  return (
    <View style={[styles.container, isLeft ? styles.left : styles.right]}>
      <View style={[styles.shadow, isLeft ? styles.shadowLeft : styles.shadowRight]} />
      <View style={[styles.balao, isLeft ? styles.balaoLeft : styles.balaoRight]}>
        <Text style={styles.texto}>{mensagem}</Text>
        <View style={[styles.triangulo, isLeft ? styles.trianguloEsquerda : styles.trianguloDireita]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    maxWidth: '80%',
  },
  left: {
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  right: {
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  shadow: {
    position: 'absolute',
    bottom: 0,
    height: 10,
    width: '100%',
    borderRadius: 6,
    zIndex: -1,
  },
  shadowLeft: {
    left: 6,
  },
  shadowRight: {
    right: 6,
  },
  balao: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    borderColor: 'black',
    borderWidth: 1,
    position: 'relative',
  },
  balaoLeft: {
    marginLeft: 6,
  },
  balaoRight: {
    marginRight: 6,
  },
  texto: {
    fontSize: 16,
  },
  triangulo: {
    position: 'absolute',
    bottom: -10,
    width: 0,
    height: 0,
    borderTopWidth: 10,
    borderTopColor: 'white',
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
    borderRightWidth: 10,
    borderRightColor: 'transparent',
  },
  trianguloEsquerda: {
    left: 10,
    transform: [{ rotate: '-90deg' }],
    borderTopColor: 'white',
    borderBottomColor: 'transparent',
  },
  trianguloDireita: {
    right: 10,
    transform: [{ rotate: '90deg' }],
    borderTopColor: 'white',
    borderBottomColor: 'transparent',
  },
});
