import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Jura_400Regular, Jura_700Bold } from '@expo-google-fonts/jura'; // Importar as fontes

type ExitModalProps = {
    visible: boolean;
    onClose: () => void;
    onConfirm: () => void;
};

export default function ExitModal({ visible, onClose, onConfirm }: ExitModalProps) {
    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.container}>
                <View style={styles.modal}>
                    <Text style={styles.message}>Você, realmente, deseja sair do Poundsflats?</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonNo} onPress={onClose}>
                            <Text style={styles.buttonTextNo}>Não, quero continuar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonYes} onPress={onConfirm}>
                            <Text style={styles.buttonTextYes}>Sim, sair agora!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end', 
        alignItems: 'center',
    },
    modal: {
        width: '100%', 
        height: 205, 
        padding: 24,
        backgroundColor: 'white',
        borderRadius: 16,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.8, 
        shadowRadius: 20, 
        elevation: 10, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    message: {
        fontSize: 16,
        marginBottom: 24,
        fontFamily: 'Jura_400Regular', 
    },
    buttonContainer: {
        width: '100%',
        gap: 24,
        justifyContent: 'space-between',
    },
    buttonYes: {
        width: 345,
        height: 36,
        backgroundColor: '#7B2CBF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
    },
    buttonNo: {
        width: 345,
        height: 36,
        backgroundColor: '#0000005C',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
    },
    buttonTextYes: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Jura_700Bold', 
    },
    buttonTextNo: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Jura_700Bold', 
    },
});
