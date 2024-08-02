import { Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

interface ContinueButtonProps {
  href: string;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
}

export default function ContinueButton({ href, onPress, disabled }: ContinueButtonProps) {
  const router = useRouter();

  const handlePress = (event: GestureResponderEvent) => {
    if (onPress) onPress(event);
    if (!disabled) {
      router.push(href); // Navega para a página especificada
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.button, disabled ? styles.buttonDisabled : {}]} 
      onPress={handlePress}
      activeOpacity={disabled ? 1 : 0.7} // Mantenha a opacidade do botão
      disabled={disabled}
    >
      <Text style={styles.text}>Continuar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7B2CBF',
    borderRadius: 8,
    height: 48,
    paddingHorizontal: 16,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center', // Centraliza o texto no botão
    marginTop: 8,
  },
  buttonDisabled: {
    backgroundColor: '#A88BC0', // Tom mais claro e visível do roxo
  },
  text: {
    fontFamily: 'Jura_400Regular',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
