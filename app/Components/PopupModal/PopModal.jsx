import React, { useState } from 'react';
import { View, Modal, Button, Text } from 'react-native';

const PopupModal = ({ buttonText, modalContent }) => {
  const [modalVisible, setModalVisible] = useState(true);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EDE4FF',
        width: '100%',
    }}>
      

      <Modal visible={modalVisible} animationType="slide" transparent={true}
      style={{
        flex: 1,
        backgroundColor: 'red',
        width:100,
        height:100,
    }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20 }}>
        <Text>  {modalContent}</Text>  
            <Button title="Close" onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PopupModal;
