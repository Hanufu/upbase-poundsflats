import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import BackArrow from '../BackArrowButton/BackArrowButton';
import BtnCadastroImovel from './CadastroImovelButton';
import Welcome from './Welcome';
import TagButton from '@/components/Tags/TagButton';

export default function Header() {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // Função para alternar a seleção
    const handleTagPress = (tag: string) => {
        setSelectedTag(tag === selectedTag ? null : tag);
    };

    return (
        <View style={styles.container}>
            <View style={styles.section1}>
                <BackArrow />
                <BtnCadastroImovel />
            </View>
            <View style={styles.section2}>
                <Welcome />
            </View>
            <View style={styles.section3}>
                <TagButton
                    text='Todos os flats'
                    selected={selectedTag === 'Todos os flats'}
                    onPress={() => handleTagPress('Todos os flats')}
                    style={styles.tagButton}
                />
                <TagButton
                    text='Disponíveis'
                    selected={selectedTag === 'Disponíveis'}
                    onPress={() => handleTagPress('Disponíveis')}
                    style={styles.tagButton}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        gap: 24, 
    },
    section1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        marginBottom: 16,
    },
    section2: {
        alignItems: 'flex-start',
    },
    section3: {
        marginTop: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tagButton: {
        marginRight: 8,
        marginBottom: 8, 
    },
});
