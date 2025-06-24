import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { router } from 'expo-router';
import LoveBackground from '@/components/LoveBackground';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Index() {
  return (
     <LoveBackground>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
         <Text style={styles.bold}>NOBULL!</Text>
         <Text style={styles.subText}>Prevenção e Acolhimento na Escola</Text>
        </Text>
      </View>

      <Image
        source={require('../assets/images/mascote_cara_alegre.png')}
        style={styles.image}
        resizeMode="center"
      />

      <Text style ={styles.text_auxiliar}>
        Sua Voz Importa Aqui, Você é ouvido.
      </Text>

      <View style={styles.button}>
        <Pressable onPress={() => router.push('/screen/loginScreen')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>
        <Text style={styles.buttonText}>|</Text>
        <Pressable onPress={() => router.push('/screen/CadastroScreen')}>
          <Text style={styles.buttonText}>Cadastrar–se</Text>
        </Pressable>
      </View>
    </LoveBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  titleContainer: {
    position: 'absolute', // Use absolute positioning to place it freely
    top: height* 0.1,
    left: 20, // Add a left padding/margin
    right: 20, // Allow it to take full width with padding
    alignItems: 'flex-start', // Align items (the Text component) to the start
  },
  title: {
    fontSize: 60,
    color: '#fff',
    fontWeight: '300',
    width: '80%',
    alignSelf : 'center'
  },
  subText: {
    fontSize: 16
  },
  bold: {
    fontWeight: 'bold',
  },
  image: {
    width: '80%',
    position: 'relative',
    top: -90,
    left: width *0.1
  },
  text_auxiliar: {
    position: 'absolute',
    fontSize: 25,
    top: height *0.83,
    color: '#fff',
    alignSelf: 'center',
    width: '60%',
    textAlign: 'center'

  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 30,
    marginTop: 20,
    flexDirection: 'row',  // aqui: linha horizontal
    alignItems: 'center',  // opcional, para centralizar verticalmente os itens
    justifyContent: 'center', // opcional, para centralizar horizontalmente
    gap: 10, // espaçamento entre os itens
    position: 'absolute',
    bottom: '10%',
    width:'80%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
});