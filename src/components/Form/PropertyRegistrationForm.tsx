import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Input } from '../Input/Input';
import { Jura_400Regular } from '@expo-google-fonts/jura';
import ContinueButton from '../ContinueButton/ContinueButton';

export default function PropertyRegistrationForm() {
  const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      <Input placeholder='Nome do imóvel' />
      <Text style={styles.text}>
        O nome do imóvel será exibido na sua tela inicial e na reserva para o hóspede
      </Text>
      <View >
        <Input
          style={styles.descricaoInput}
          placeholder='Descrição'
          value={description}
          onChangeText={(text) => setDescription(text)}
          multiline
        />
        <Text style={styles.inputInfo}>
          {description.length}/250
        </Text>
      </View>
      <Input placeholder='CEP' />
      <Input placeholder='Endereço' />
      <View style={styles.section2}>
        <Input style={styles.numero} placeholder='Número' />
        <Input style={styles.complemento} placeholder='Complemento' />
      </View>
      <View style={styles.section3}>
        <Input style={styles.cidade} placeholder='Cidade' />
        <Input style={styles.uf} placeholder='UF' />
      </View>
      <ContinueButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  text: {
    fontFamily: 'Jura_400Regular',
    fontSize: 12,
    lineHeight: 16,
    color: '#10002B',
  },
  descricaoInput: {
    height: 104,
    textAlignVertical: 'top',
  },
  inputInfo: {
    fontFamily: 'Jura_400Regular',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    textAlign: 'right',
    color: '#000000',
    paddingHorizontal: 4,
    marginTop:4,
  },
  section2: {
    flexDirection: 'row',
    gap: 16,
  },
  numero: {
    flex: 1,
  },
  complemento: {
    flex: 1,
  },
  section3: {
    flexDirection: 'row',
    gap: 16,
  },
  cidade: {
    flex: 3,
  },
  uf: {
    flex: 1,
  },
});
