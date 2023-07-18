import React, {useState} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import PopModal from '../../Components/PopupModal/PopModal';

const WarningScreen = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.Btngrp}>
        <Button
          color={'#6528F7'}
          style={styles.Btn}
          title="Tap to read the terms before procced"
          onPress={openPopup}
        />
      </View>
      <PopModal isVisible={isPopupVisible} onClose={closePopup} title="*note">
        {/* Contents of the popup */}
        <Text>Please try to be honest with your responses :)</Text>
      </PopModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE4FF',
  },

  Btn: {
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#EDE4FF',
  },

  Btngrp: {
    flex: 2,
    justifyContent: 'center',
    // width:"80%",
    color: '#EDE4FF',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default WarningScreen;
