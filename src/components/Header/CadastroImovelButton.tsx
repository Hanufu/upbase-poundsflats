import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { Link, useRouter } from 'expo-router';

export default function BtnCadastroImovel() {
  const router = useRouter();
  return (
    <Link href="/register" asChild>
      <TouchableOpacity style={styles.container} onPress={ () => router.push('/register')}>
        <Entypo name="plus" size={32} color="#7B2CBF" style={styles.icon} />
        <Text style={styles.text}>Cadastrar imóvel</Text>
      </TouchableOpacity>
    </Link>
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
