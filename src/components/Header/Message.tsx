import React from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';

interface MessageProps {
    text: string;
    style?: StyleProp<TextStyle>;
}

function Message({ text, style }: MessageProps) {
    return (
        <Text style={style}>
            {text}
        </Text>
    );
}

export default Message;
