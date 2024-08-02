import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity, Modal, FlatList, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { Input } from '../Input/Input';
import ContinueButton from '../ContinueButton/ContinueButton';
import { usePropertyDatabase } from '@/src/database/usePropertyDatabase';

const windowWidth = Dimensions.get('window').width;

export default function PropertyRegistrationForm() {
  const [nome_imovel, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const propertyDatabase = usePropertyDatabase();

  // Lista de estados com siglas
  const estados = [
    { label: 'Selecione um estado', value: '' },
    { label: 'AC', value: 'AC' },
    { label: 'AL', value: 'AL' },
    { label: 'AP', value: 'AP' },
    { label: 'AM', value: 'AM' },
    { label: 'BA', value: 'BA' },
    { label: 'CE', value: 'CE' },
    { label: 'DF', value: 'DF' },
    { label: 'ES', value: 'ES' },
    { label: 'GO', value: 'GO' },
    { label: 'MA', value: 'MA' },
    { label: 'MT', value: 'MT' },
    { label: 'MS', value: 'MS' },
    { label: 'MG', value: 'MG' },
    { label: 'PA', value: 'PA' },
    { label: 'PB', value: 'PB' },
    { label: 'PR', value: 'PR' },
    { label: 'PE', value: 'PE' },
    { label: 'PI', value: 'PI' },
    { label: 'RJ', value: 'RJ' },
    { label: 'RN', value: 'RN' },
    { label: 'RS', value: 'RS' },
    { label: 'RO', value: 'RO' },
    { label: 'RR', value: 'RR' },
    { label: 'SC', value: 'SC' },
    { label: 'SP', value: 'SP' },
    { label: 'SE', value: 'SE' },
    { label: 'TO', value: 'TO' },
  ];

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

  const handleSelectState = (state: string) => {
    setUf(state);
    setModalVisible(false);
  };

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
        <TouchableOpacity
          style={styles.ufContainer}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.ufText}>{uf || 'UF'}</Text>
          <Text style={styles.arrowDown}>▼</Text>
        </TouchableOpacity>
      </View>
      <ContinueButton 
        onPress={create}
        disabled={!isFormValid}
        href={'/register/RegistrationDetail'} 
      />
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FlatList
              data={estados}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => handleSelectState(item.value)}
                >
                  <Text style={styles.modalItemText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
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
  ufContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    flexDirection: 'row',
  },
  ufText: {
    fontFamily: 'Jura_400Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#10002B',
  },
  arrowDown: {
    fontSize: 16,
    color: '#00000029',
    marginLeft: 8,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: windowWidth - 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  modalItem: {
    padding: 15,
  },
  modalItemText: {
    fontFamily: 'Jura_400Regular',
    fontSize: 16,
    color: '#10002B',
  },
});
