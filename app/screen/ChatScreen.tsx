import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import GradientBackground from '@/components/GradientBackground';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import BalaoMensagem from '@/components/BalaoMensagem';
import { TouchableWithoutFeedback } from 'react-native';

export default function ChatScreen() {
  const router = useRouter();

  const [mensagens, setMensagens] = useState([
    { texto: 'Oi! Tudo bem?', lado: 'esquerda' },
    { texto: 'Oi! Tudo sim', lado: 'direita' },
  ]);
  const [novaMensagem, setNovaMensagem] = useState('');

  const handleEnviarMensagem = () => {
    if (novaMensagem.trim() === '') return;
    setMensagens((prev) => [...prev, { texto: novaMensagem, lado: 'direita' }]);
    setNovaMensagem('');
    Keyboard.dismiss();
  };

  return (
  <View style={styles.container}>
    <GradientBackground />

    {/* Cabeçalho */}
    <View style={styles.header}>
      <TouchableOpacity onPress={router.back} style={styles.backButton}>
        <Ionicons name="chevron-back" size={28} color="#eee" />
      </TouchableOpacity>

      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={28} color="#fff" />
        </View>
        <View>
          <Text style={styles.title}>NÚCLEO DE ATENÇÃO PSICOSSOCIAL</Text>
          <Text style={styles.subtitle}>21ª GRE</Text>
          <Text style={styles.status}>ONLINE</Text>
        </View>
      </View>
    </View>

    {/* Área de chat com dismiss e scroll */}
    <KeyboardAvoidingView
      style={styles.chatContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={styles.mensagensArea}
            keyboardShouldPersistTaps="handled"
          >
            {mensagens.map((msg, index) => (
              <BalaoMensagem
                key={index}
                mensagem={msg.texto}
                lado={msg.lado as 'esquerda' | 'direita'}
              />
            ))}
          </ScrollView>

          {/* Campo de entrada */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite sua mensagem..."
              value={novaMensagem}
              onChangeText={setNovaMensagem}
              onSubmitEditing={handleEnviarMensagem}
              returnKeyType="send"
            />
            <TouchableOpacity onPress={handleEnviarMensagem} style={styles.sendButton}>
              <Ionicons name="send" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 40,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 12,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#f24bb4',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#2b003f',
  },
  subtitle: {
    fontSize: 12,
    color: '#2b003f',
  },
  status: {
    fontSize: 12,
    color: '#2b003f',
    textTransform: 'uppercase',
  },
  chatContainer: {
    flex: 1,
  },
  mensagensArea: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 80,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#f24bb4',
    padding: 12,
    borderRadius: 24,
  },
});
