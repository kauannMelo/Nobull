// RelatarSituacao.tsx
import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export default function RelatarSituacao() {
  const [local, setLocal] = React.useState('sala');

  return (
    <View style={{ flex: 1, backgroundColor: '#f9f7fc', padding: 20 }}>
      {/* Cabeçalho */}
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 40, paddingBottom: 20 }}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
        <Text style={{ flex: 1, textAlign: 'center', color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
          Relatar uma Situação
        </Text>
        <Ionicons name="lock-closed" size={20} color="#fff" />
      </View>

      {/* Área com fundo roxo */}
      <View style={{ backgroundColor: '#7a4ccf', borderRadius: 10, padding: 16 }}>
        {/* Campo de descrição */}
        <TextInput
          placeholder="Descreva o que aconteceu..."
          style={{
            backgroundColor: '#fff',
            borderRadius: 10,
            padding: 10,
            marginBottom: 16,
            fontSize: 14,
          }}
          multiline
        />

        {/* Onde ocorreu */}
        <Text style={{ color: '#fff', marginBottom: 8 }}>Onde ocorreu?</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
          {['sala', 'patio', 'transporte'].map((item, i) => (
            <View key={i} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton
                value={item}
                status={local === item ? 'checked' : 'unchecked'}
                onPress={() => setLocal(item)}
                color="#fff"
              />
              <Text style={{ color: '#fff', marginRight: 8 }}>
                {item === 'sala' ? 'Sala de aula' : item === 'patio' ? 'Pátio' : 'Transporte'}
              </Text>
            </View>
          ))}
        </View>

        {/* Anexar arquivos */}
        <TouchableOpacity
          style={{
            backgroundColor: '#f0e8ff',
            borderStyle: 'dashed',
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 10,
            padding: 20,
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <Ionicons name="add" size={24} color="#7a4ccf" />
          <Text style={{ textAlign: 'center', color: '#7a4ccf', marginTop: 8 }}>
            Anexar arquivos: fotos, áudios ou documentos{'\n'}(limite de 3)
          </Text>
        </TouchableOpacity>

        {/* Comentário adicional */}
        <TextInput
          placeholder="Deseja adicionar um comentário para a equipe?"
          style={{
            backgroundColor: '#fff',
            borderRadius: 10,
            padding: 10,
            marginBottom: 16,
            fontSize: 14,
          }}
        />

        {/* Botão enviar */}
        <TouchableOpacity
          style={{
            backgroundColor: '#7a4ccf',
            borderRadius: 10,
            padding: 15,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Enviar denúncia</Text>
        </TouchableOpacity>
      </View>

      {/* Mascote */}
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Image
          source={require('../../assets/images/mascote-carta.png')} // salve a imagem como mascote.png
          style={{ width: 120, height: 120, resizeMode: 'contain' }}
        />
      </View>
    </View>
  );
}
