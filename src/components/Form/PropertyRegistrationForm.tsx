import { View, Text, StyleSheet, Alert, Button, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Input } from '../Input/Input';
import ContinueButton from '../ContinueButton/ContinueButton';
import { usePropertyDatabase } from '@/src/database/usePropertyDatabase';

export default function PropertyRegistrationForm() {
  const [nome_imovel, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  const propertyDatabase = usePropertyDatabase();

  const isFormValid = nome_imovel && descricao && cep && endereco && numero && cidade && uf;

  async function create() {
    if (!isFormValid) {
      Alert.alert("Preencha todos os campos", "Todos os campos são obrigatórios.");
      return;
    }

    if (isNaN(Number(numero))) {
      Alert.alert("Número", "O número precisa ser um número");
      return;
    }

    try {
      const response = await propertyDatabase.create({
        nome_imovel,
        descricao,
        cep,
        endereco,
        numero: Number(numero),
        complemento,
        cidade,
        uf,
      });
      
      Alert.alert("Produto Cadastrado com ID: ", response.insertedRowId.toString());
      setNome('');
      setDescricao('');
      setCep('');
      setEndereco('');
      setNumero('');
      setComplemento('');
      setCidade('');
      setUf('');
    } catch (error) {
      console.error('Erro ao criar a propriedade:', error);
    }
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder='Nome do imóvel'
        onChangeText={setNome}
        value={nome_imovel}
      />
      <Text style={styles.text}>
        O nome do imóvel será exibido na sua tela inicial e na reserva para o hóspede
      </Text>
      <View>
        <Input
          style={styles.descricaoInput}
          placeholder='Descrição'
          value={descricao}
          onChangeText={setDescricao}
          multiline
        />
        <Text style={styles.inputInfo}>
          {descricao.length}/250
        </Text>
      </View>
      <Input
        placeholder='CEP'
        value={cep}
        onChangeText={setCep}
      />
      <Input
        placeholder='Endereço'
        value={endereco}
        onChangeText={setEndereco}
      />
      <View style={styles.section2}>
        <Input
          style={styles.numero}
          placeholder='Número'
          value={numero}
          onChangeText={setNumero}
          keyboardType='numeric'
        />
        <Input
          style={styles.complemento}
          placeholder='Complemento'
          value={complemento}
          onChangeText={setComplemento}
        />
      </View>
      <View style={styles.section3}>
        <Input
          style={styles.cidade}
          placeholder='Cidade'
          value={cidade}
          onChangeText={setCidade}
        />
        <Input
          style={styles.uf}
          placeholder='UF'
          value={uf}
          onChangeText={setUf}
        />
      </View>
      <ContinueButton 
        onPress={create}
        disabled={!isFormValid}
        href={'/register/RegistrationDetail'} 
      />
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
    marginTop: 4,
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
