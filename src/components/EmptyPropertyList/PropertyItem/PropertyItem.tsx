import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function PropertyItem() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('@/assets/images/PropertyImage.png')} />
      <View style={styles.section1}>
        <Text style={[styles.text, styles.nome]}>Poundsflats Aquário</Text>
        <View style={styles.nota}>
          <Text style={[styles.text, styles.nota]}>4.5</Text>
          <AntDesign name="star" size={16} color="#7B2CBF" />
        </View>
      </View>
      <View style={styles.section2}>
        <Text style={[styles.text, styles.local]}>Localização</Text>
        <Text style={[styles.text, styles.valor]}>Diária: R$97</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  image: {
    width: 345,
    height: 250,
    borderRadius: 24,
  },
  section1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 20,
  },
  section2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 16,
    marginTop: -16
  },
  text: {
    fontFamily: 'Jura_400Regular',
    color: '#10002B',
    lineHeight: 20,
    fontSize: 16,
  },
  nome: {
    fontFamily: 'Jura_700Bold',
    letterSpacing: -0.17,
  },
  nota: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  local: {
    fontSize: 12,
    lineHeight: 16,
  },
  valor: {
    fontFamily: 'Jura_500Medium',
    fontSize:12,
    lineHeight: 16,
  },
});
