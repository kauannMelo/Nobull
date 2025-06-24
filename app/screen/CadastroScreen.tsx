import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  TouchableOpacity,
  Image,
  Pressable
} from 'react-native';
import GradientBackground from '../../components/GradientBackground';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import ButtonGradiente from '../../components/ButtonGradiente';
import StyledInput from '@/components/StyledInput';

const { height } = Dimensions.get('window');

export default function LoginScreen() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [nickName, setNickName] = useState('');
  const [Endereco, setEndereco] = useState('');
  const [serie, setserie] = useState('');
  const [escola, setEscola] = useState('');

  const handleLogin = () => {
    console.log('deu certo:');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.page}>
      <GradientBackground />

      {/* Botão voltar fixo */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        style={styles.keyboardAvoiding}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          {/* Mascote metade na área roxa e metade no branco */}
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/mascote_face.png')}
              style={styles.profileImage}
              resizeMode="contain"
            />
          </View>

          {/* Formulário */}
          <View style={styles.formContainer}>
            <Text style={styles.loginTitle}>Cadastro do Aluno</Text>

            <StyledInput
              label="Nome completo"
              value={nome}
              onChangeText={setNome}
              placeholder="Digite seu nome"
            />
            <StyledInput
              label="NickName"
              value={nickName}
              onChangeText={setNickName}
              placeholder="Digite seu nickname"
            />
            <StyledInput
              label="Endereço"
              value={Endereco}
              onChangeText={setEndereco}
              placeholder="Digite seu endereço"
            />
            <StyledInput
              label="Ano/Série"
              value={serie}
              onChangeText={setserie}
              placeholder="Digite sua série"
            />
            <StyledInput
              label="Escola"
              value={escola}
              onChangeText={setEscola}
              placeholder="Digite sua escola"
              
            />

              <Pressable onPress={() => router.push('/screen/loginScreen')}>
                <Text style={styles.buttonText}>Cadastrar</Text>
              </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 40,
    left: 15,
    zIndex: 10,
  },
  backButton: {
    padding: 8,
  },
  keyboardAvoiding: {
    flex: 1,
  },
  scrollContainer: {
    paddingTop: height * 0.25, // dá espaço para o gradiente
    paddingBottom: 40,
    alignItems: 'center',
  },
  imageContainer: {
    position: 'absolute',
    top: height * 0.24, // posiciona o mascote meio na parte roxa, meio na branca
    alignSelf: 'center',
    zIndex: 2,
  },
  profileImage: {
    width: 180,
    height: 190,
    borderRadius: 90,
  },
  formContainer: {
    backgroundColor: '#f0f0f0',
    width: '90%',
    borderRadius: 50,
    padding: 20,
    alignItems: 'center',
    marginTop: 100, // empurra o formulário para baixo do mascote
  },
  loginTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    marginTop: 40
  },
  button: {
    padding: 12,
    marginTop: 24,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },

  buttonText:{
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
    }
});
