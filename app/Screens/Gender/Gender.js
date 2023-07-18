import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
// import InputField from '../../components/InputField';
import InputField from '../../Components/InputField/InputField';
import CustomTouchableOpacity from '../../Components/Button/Button';

import {Alert} from 'react-native';
const Gender = () => {
  const [Username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.Titlecontainer}>What You Are Looking For?</Text>
      </View>

      <View style={styles.GenderContainer}>
        <TouchableOpacity
          style={{height:220}}
          onPress={() => setLogin(true)}>
          <Image
            style={{width: 150, height: 150}}
            source={require('../../Assets/male.png')}
          />
          <Text style={styles.gendertext}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          
          onPress={() => setLogin(true)}>
          <Image
            style={{width: 150, height: 150}}
            source={require('../../Assets/female.png')}
          />
          <Text style={styles.gendertext}>Female</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EDE4FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gendertext: {
    // backgroundColor : '#6528F7',
    color: 'black',
    fontSize: 20,
    height: 50,
    paddingTop: 10,
    textAlign: 'center',
  },
  header: {
    flex: 1,
    marginTop: '20%',
  },
  Titlecontainer: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    marginTop: 20,
  },
  GenderContainer: {
    flex: 6,
    marginBottom: 120,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
});

export default Gender;
