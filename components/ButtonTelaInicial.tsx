import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  TextStyle,
  ViewStyle,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Center } from 'native-base';

type Props = {
  onPress: () => void;
  iconName?: string; // ícone do Ionicons
  iconImage?: ImageSourcePropType; // imagem personalizada
  title: string;
  subtitle: string;
  iconStyle?: StyleProp<TextStyle>;
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

const ButtonTelaInicial = ({
  onPress,
  iconName,
  iconImage,
  title,
  subtitle,
  iconStyle,
  titleStyle,
  subtitleStyle,
  containerStyle,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle]}>
      <View style={styles.content}>
        {iconImage ? (
          <Image source={iconImage} style={[styles.iconImage, iconStyle]} />
        ) : iconName ? (
          <Ionicons name={iconName} size={32} color="#fff" style={iconStyle} />
        ) : null}

        <View style={styles.textContainer}>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
          <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3c0a5b',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    elevation: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconImage: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems:'center',
    marginLeft: 5,
    flexShrink: 1,
    width: 120
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  subtitle: {
    color: '#ccc',
    fontSize: 12,
    textAlign: 'justify'
  },
});

export default ButtonTelaInicial;
