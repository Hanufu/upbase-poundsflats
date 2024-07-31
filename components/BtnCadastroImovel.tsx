import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

export default function BtnCadastroImovel() {
  return (
    <TouchableOpacity style={styles.container}>
      <Entypo name="plus" size={32} color="#7B2CBF" style={styles.icon} />
      <Text style={styles.text}>Cadastrar imóvel</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Jura_700Bold',
    color: '#7B2CBF',
    lineHeight: 24,
  },
});
 