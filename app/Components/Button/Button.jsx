import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

const CustomTouchableOpacity = ({ onPress, style, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});

export default CustomTouchableOpacity;
