import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from "react-native";

export default function BackArrow() {
    return (
        <Ionicons name="arrow-back-sharp" size={40} color="#7B2CBF" style={styles.icon} />
    );
}

const styles = StyleSheet.create({
    icon: {}
});
