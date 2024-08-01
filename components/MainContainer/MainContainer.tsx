import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function MainContainer({ children }: { children: React.ReactNode }) {
    return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        gap: 24,
        backgroundColor:'#FFFFFF',
        paddingTop: 50,
    },
});
