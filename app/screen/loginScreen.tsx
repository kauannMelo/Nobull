import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
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

const { height, width } = Dimensions.get('window');

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', senha);

    // if(email ==="aluno" && senha === "aluno"){
      router.push('/screen/InicialAlunoScreen');
    // }else{
    //   alert("Email ou Senha Invalido");
    // }
  };

  const handleBack = () => {
    router.back(); // volta para a tela anterior
  };

  return (
    <View style={styles.page}>
       <GradientBackground />
      {/* Cabeçalho com gradiente e botão voltar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Mascote*/}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/mascote_face.png')}
          style={styles.profileImage}
          resizeMode="contain"
        />
       
      </View>

      {/* Formulário */}
      <KeyboardAvoidingView
        style={styles.formWrapper}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.formContainer}>
          <View style={styles.form}>
            <Text style={styles.loginTitle}>Login</Text>
            <View style={styles.inputGroup}>
              <Image
                source={require('../../assets/images/avatar-email.png')}
                style={styles.inputAvatar}
              />
              <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputGroup}>
              <Image
                source={require('../../assets/images/avatar-password.png')}
                style={styles.inputAvatar}
              />
              <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
              />
            </View>
            <Pressable style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Entrar</Text>
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
    width: '100%',
    position: 'relative',
    justifyContent: 'flex-start',
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 40,
    left: 15,
    zIndex: 10,
    padding: 8,
  },
  imageContainer: {
    position: 'absolute',
    top: height * 0.22,
    alignSelf: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 70,
  },
  loginTitle: {
    marginTop: 8,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  formWrapper: {
    
    top: height * 0.2,
    left: 0,
    right: 0,
    bottom: 0,
  },
  formContainer: {
    backgroundColor: '#f0f0f0',
    flexGrow: 1,
    borderRadius:50,
    padding: 20,
    marginTop: height * 0.15,
    justifyContent: 'center',
  },
  form: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 16,
    paddingHorizontal: 10,
  },
  inputAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  button: {
    padding: 12,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {         
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
    
  },
});
