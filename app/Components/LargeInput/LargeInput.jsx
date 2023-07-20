import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

const LargeInputBox = () => {
  const [text, setText] = useState('');

  return (
    <View style={{width:"90%"}}>
      <TextInput
        multiline
        numberOfLines={4} // Adjust the number of lines as needed
        placeholder="Describe Here..."
        onChangeText={setText}
        value={text}
        style={{
          height: "50%", // Adjust the height as needed
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          width: '100%',
        }}
      />
    </View>
  );
};

export default LargeInputBox;
