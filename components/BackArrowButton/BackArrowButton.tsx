import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function BackArrow() {
    return (
        <TouchableOpacity  onPress={ () => router.back()}>
            <Ionicons name="arrow-back-sharp" size={40} color="#7B2CBF" style={styles.icon} />
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    icon: {}
});
