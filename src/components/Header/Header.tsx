import React, { useState } from 'react';
import { View, StyleSheet, StyleProp, TextStyle, Platform } from 'react-native';

import BackArrow from '../BackArrowButton/BackArrowButton';
import BtnCadastroImovel from './CadastroImovelButton';
import TagButton from '@/src/components/Tags/TagButton';
import Message from './Message';

import { usePathname } from 'expo-router';

interface HeaderProps {
    message: string;
    messageStyle?: StyleProp<TextStyle>; 
}

export default function Header({ message, messageStyle }: HeaderProps) {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const pathname = usePathname();

    const handleTagPress = (tag: string) => {
        setSelectedTag(tag === selectedTag ? null : tag);
    };

    const isHomePage = pathname === '/';

    return (
        <View style={styles.container}>
            {isHomePage ? (
                <>
                    <View style={styles.section1}>
                        <BackArrow />
                        <BtnCadastroImovel />
                    </View>
                    <View style={[styles.section2, styles.centered]}>
                        <Message
                            text={message}
                            style={[styles.message, messageStyle]}
                        />
                    </View>
                    <View style={[styles.section3, styles.centered]}>
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
                </>
            ) : (
                <>
                    <View style={styles.section1}>
                        <BackArrow />
                    </View>
                    <View style={styles.section2}>
                        <Message
                            text={message}
                            style={[styles.message, messageStyle]} 
                        />
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 20,
        alignSelf: 'stretch',
    },
    section1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    section2: {
        alignItems: 'stretch',
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
    message: {
        fontSize: 24,
        fontFamily: 'Jura_700Bold',
        lineHeight: 28,
        color: "#10002B",
    },
    centered: {
        ...(Platform.OS === 'web' && {
            alignItems: 'center', 
            justifyContent: 'center', 
        }),
    },
});
