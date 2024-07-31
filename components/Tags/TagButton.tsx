import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';

interface TagButtonProps {
  text: string;
  selected?: boolean;
  onPress?: () => void; 
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const TagButton = ({ text, selected: propSelected = false, onPress, style, textStyle }: TagButtonProps) => {
  const [selected, setSelected] = useState(propSelected);

  const handlePress = () => {
    setSelected(!selected); 
    if (onPress) {
      onPress(); 
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        selected ? styles.selectedButton : styles.defaultButton
      ]}
      onPress={handlePress}
    >
      <Text style={[
        styles.text,
        textStyle,
        selected ? styles.selectedText : styles.defaultText
      ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 104,           
    height: 24,           
    paddingVertical: 4,  
    paddingHorizontal: 12, 
    borderWidth: 1,
    borderColor: '#00000029',
    fontFamily: 'Jura_400Regular',
    opacity: 1,  
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 8,
  },
  defaultButton: {
    backgroundColor: '#FFFFFF',
  },
  selectedButton: {
    backgroundColor: '#7B2CBF',
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 16,
  },
  defaultText: {
    color: '#7B2CBF',
  },
  selectedText: {
    color: 'white',
  },
});

export default TagButton;
