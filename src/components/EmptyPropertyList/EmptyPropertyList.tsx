import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function EmptyPropertyList() {
    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/Emoticon-Sad.png')} style={styles.image} />
            <Text style={styles.message}>Você não tem nenhum imóvel cadastrado. Que tal cadastrar agora?</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Cadastrar meu primeiro imóvel</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap:16,
        maxWidth: 345,
        marginTop: -100,
    },
    image: {
        width: 48,
        height: 48,
        marginBottom: 16,
    },
    message: {
        fontFamily: 'Jura_400Regular',
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 24,
        color: "#10002B",   
    },
    button: {
        width: '100%', 
        height: 36, 
        paddingVertical: 4, 
        paddingHorizontal: 8, 
        gap: 0,
        borderRadius: 8, 
        borderColor: '#7B2CBF', 
        borderWidth: 1, 
        opacity: 1, 
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
      },
      text: {
        color: '#7B2CBF',
        fontFamily: 'Jura_500Medium',
        fontSize: 12,
        lineHeight: 20,
      },
});