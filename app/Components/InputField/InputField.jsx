import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const InputField = ({ value, onChangeText, placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        // secureTextEntry={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    height: 50,
    borderColor: '#6528f7',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontWeight: 'bold'
  },
});

export default InputField;
