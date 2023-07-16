import React, {useState} from 'react';
import {View, StyleSheet, Image,Text, TouchableOpacity} from 'react-native';
// import InputField from '../../components/InputField';
import InputField from '../../Components/InputField/InputField';
import CustomTouchableOpacity from '../../Components/Button/Button';

import {Alert} from 'react-native';
const Login = () => {
  const [Username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login , setLogin] = useState(false)
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#EDE4FF',
      }}>
      <View style={styles.LogoContainer}>
        <Image
          style={styles.image}
          source={require('../../Assets/Tadashi.png')}
        />
      </View>

      <View style={styles.InputContainer}>
        <InputField
          placeholder="Username"
          value={Username}
          onChangeText={text => setUsername(text)}
        />
       {login ?  <InputField
          placeholder="email"
          value={email}
          onChangeText={text => setEmail(text)}
        /> : null
        }

        <InputField
          placeholder="password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={styles.AlreadyContainer}>
      {login ?<TouchableOpacity onPress={()=>setLogin(false)}>
      <Text style={{color: '#6528F7'}}>Already have an account?</Text>
      </TouchableOpacity> : <TouchableOpacity onPress={()=>setLogin(true)}>
      <Text style={{color: '#6528F7'}}>I need to register</Text>
         </TouchableOpacity>}
      </View>
      <View style={styles.ButtonContainer}>
          {
           email.length > 0 && Username.length > 0 && password.length > 0 ? <CustomTouchableOpacity
          style={{backgroundColor: '#6528F7',width:'80%',alignSelf:'center',marginTop:20}}
            title="Submit"
            onPress={() => login ?  console.log('Login') : console.log('Register')}
          />
        : <CustomTouchableOpacity 
        style={{backgroundColor: '#D7BBF5',width:'80%',alignSelf:'center',marginTop:20}}
        title="Submit"
        onPress={() => Alert.alert('Please fill all the fields')}
        disabled
        />
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AlreadyContainer:{
    
    
    width:'100%',
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    
    
  },
  LogoContainer: {
    flex: 3,
    width: '100%',

    alignItems: 'center',
  },
  InputContainer: {
    flex: 2,
    width: '80%',
    alignSelf: 'center',
  },
  ButtonContainer: {
    flex: 1,
    width: '100%',
    
  },
  image: {
    width: '100%',
    height: "80%",
  },
});

export default Login;
