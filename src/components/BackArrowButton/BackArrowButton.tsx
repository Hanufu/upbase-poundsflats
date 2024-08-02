import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, TouchableOpacity, Platform, BackHandler } from 'react-native';
import { router } from 'expo-router';
import ExitModal from '@/src/components/ConfirmExitModal/ConfirmExitModal'; // Certifique-se de ajustar o caminho se necessário

export default function BackArrow() {
    const [modalVisible, setModalVisible] = useState(false);

    const handleBackPress = () => {
        if (router.canGoBack()) {
            router.back();
        } else {
            setModalVisible(true);
        }
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleConfirmExit = () => {
        setModalVisible(false);
        if (Platform.OS === 'ios') {
            // Simular o comportamento de "sair" redirecionando para a tela inicial
            router.replace('/');
        } else {
            // Android: Sai do aplicativo
            BackHandler.exitApp();
        }
    };

    return (
        <>
            <TouchableOpacity onPress={handleBackPress}>
                <Ionicons name="arrow-back-sharp" size={40} color="#7B2CBF" style={styles.icon} />
            </TouchableOpacity>
            <ExitModal
                visible={modalVisible}
                onClose={handleCloseModal}
                onConfirm={handleConfirmExit}
            />
        </>
    );
}

const styles = StyleSheet.create({
    icon: {},
});
