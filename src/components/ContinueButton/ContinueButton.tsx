import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'

export default function ContinueButton() {
  const router = useRouter();
  return (
    <Link href='/register/RegistrationDetail' asChild>
      <TouchableOpacity style={styles.button} onPress={ () => router.push('/register/RegistrationDetail')}>
        <Text style={styles.text}>Continuar</Text>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: '#7B2CBF',
    borderRadius: 8,
    height:48,
    paddingHorizontal: 16,
    paddingVertical: 4,
    justifyContent: 'center',
    marginTop: 8,
  },
  text:{
    fontFamily: 'Jura_400Regular',
    fontSize: 16,
    lineHeight: 24, 
    textAlign: 'center',
    color: '#FFFFFF'
  }
});