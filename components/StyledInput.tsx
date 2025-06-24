// StyledInput.tsx
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface StyledInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export default function StyledInput({ label, value, onChangeText, placeholder }: StyledInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999"
      />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  backgroundColor: '#F5F2F2',
  borderColor: '#333',
  borderWidth: 1,
  borderRadius: 50,
  paddingHorizontal: 20,
  paddingTop: 1,
  paddingBottom: 1,
  width: '90%',
  alignSelf: 'center',
  marginVertical: 5,
},
label: {
  color: '#2E1A47',
  fontWeight: 'bold',
},
  input: {
    fontSize: 16,
    margin: 0,
    marginTop: 0,
    color: '#000',
  },
});
