import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const SpinnerLoading: React.FC = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#7B2CBF" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF', 
    },
});

export default SpinnerLoading;