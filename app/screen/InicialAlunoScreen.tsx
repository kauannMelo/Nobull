import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { router } from 'expo-router';
import SimpleGradientBackground from '@/components/SimpleGradientBackground';
import ButtonTelaInicial from '@/components/ButtonTelaInicial';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function InicialAlunoScreen() {
  return (
    <SimpleGradientBackground>
      <Image
        source={require('../../assets/images/mascote_expressao_normal.png')}
        style={styles.image}
        resizeMode="center"
      />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Olá, NoBullynho</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.column}>
          <ButtonTelaInicial
            onPress={() => {}}
            iconName="megaphone"
            title="Denunciar"
            subtitle="Formulário anônimo com opção de anexar provas"
            containerStyle = {styles.buttonFuncionalidade}
          />

          <ButtonTelaInicial
            onPress={() => {}}
            iconName="book"
            title="Diario Emocional"
            subtitle="Registro de humor diario e espaços para desabafos"
            containerStyle = {styles.buttonFuncionalidade}
          />

          <ButtonTelaInicial
            onPress={() => {}}
            iconName="stats-chart"
            title="Meus Estatus"
            subtitle="Status da Denuncia, número de protocolo, resposta da equipe"
            containerStyle = {styles.buttonFuncionalidade}
          />

        </View>

        <View style={styles.column}>
          
          <ButtonTelaInicial
            onPress={() => {router.push('/screen/ChatScreen');}}
            iconName="chatbubble-ellipses"
            title="Chat Seguro"
            subtitle="com Psicologos e assistentes sociais"
            containerStyle = {styles.buttonFuncionalidade}
          />
          <ButtonTelaInicial
            onPress={() => {}}
            iconName="people"
            title="Rede de Apoio"
            subtitle="Mensagens positivas entre colegas - com nicknames"
            containerStyle = {styles.buttonFuncionalidade}
          />
          <ButtonTelaInicial
            onPress={() => {}}
            iconName="notifications"
            title="Notificações"
            subtitle="Push com atualizações e mensagens da equipe"
            containerStyle = {styles.buttonFuncionalidade}
          />
        </View>
      </View>

      <View style={styles.bottomButtonContainer}>
        <ButtonTelaInicial
          onPress={() => {}}
          iconName="document-attach-outline"
          title="Relatório"
          subtitle="Visualizar denúncias"
          containerStyle={styles.wideButton}
        />
      </View>
    </SimpleGradientBackground>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    position: 'absolute',
    top: height * 0.4,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '300',
    width: '80%',
    textAlign: 'center',
  },
  image: {
    width: '50%',
    position: 'relative',
    top: height * -0.25,
    alignSelf: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: height *-0.45,
  },
  buttonFuncionalidade :{
    height: height *0.13
  },
  column: {
    flexDirection: 'column',
    gap: 12,
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    alignItems: 'center',
  },
  wideButton: {
    width: '80%',
  },
});
