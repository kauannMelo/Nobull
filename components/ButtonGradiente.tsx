import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import GradientBackground from './GradientBackground';

type BotaoComGradienteProps = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export default function ButtonGradiente({
  title,
  onPress,
  style,
  textStyle,
}: BotaoComGradienteProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.wrapper, style]}>
      <View style={StyleSheet.absoluteFill}>
        <GradientBackground style={{width:'100%'}} />
      </View>
      <Text style={[styles.texto, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 200,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    zIndex: 1,
  },
});
