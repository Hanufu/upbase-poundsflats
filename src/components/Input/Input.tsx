import { TextInput, TextInputProps, StyleSheet } from 'react-native';

export function Input({ style, ...rest }: TextInputProps) {
  return <TextInput style={[styles.input, style]} {...rest} />;
}

const styles = StyleSheet.create({
  input: {
    height: 56,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#00000029',
    backgroundColor: '#FFFFFF',
    padding: 10,
    margin: 0,
    fontFamily: 'Jura_400Regular',
    fontSize: 16,
    color: 'black',
  },
});
