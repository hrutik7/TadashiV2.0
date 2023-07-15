import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomTouchableOpacity = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    letterSpacing: 2,
  },
});

export default CustomTouchableOpacity;
