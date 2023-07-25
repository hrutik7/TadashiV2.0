import React, {useState} from 'react';
import {View, StyleSheet, Image,Text, TouchableOpacity} from 'react-native';
// import InputField from '../../components/InputField';
import InputField from '../../Components/InputField/InputField';
import CustomTouchableOpacity from '../../Components/Button/Button';
import * as mutations from '../../../src/graphql/mutations'
import {Alert} from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Auth } from 'aws-amplify';
const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login , setLogin] = useState(false)
  const [signupDetails, setsignupDetails] = useState({
    username: '',
    email : '',
    password: ''
  });

  // const signupDetails = {
  //   username: 'Todo 1',
  //   email : 'hk@as.com',
  //   password: 'Learn AWS AppSync'
  // };
const createuser = async (a,b,c) =>{
  
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email,          // optional
      //   phone_number,   // optional - E.164 number convention
      //   // other custom attributes 
      },
      autoSignIn: { // optional - enables auto sign in after user is confirmed
        enabled: false,
      }
    });
    console.log(user);
    navigation.navigate('Confirmation')
  } catch (error) {
    console.log('error signing up:', error);
  }
}


  // mutation createUserSignup {
  //   createUserSignup(input: {
  //     username: "Nobu"
  //     email: "Great Sushi"
  //     password: "New York"
  //   }) {
  //     id username email password
  //   }
  // }
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
          value={username}
          onChangeText={text => setUsername(text)}
        />
       <InputField
          placeholder="email"
          value={email}
          onChangeText={text => setEmail(text)}
        /> 

        <InputField
          placeholder="password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={styles.AlreadyContainer}>
      <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
      <Text style={{color: '#6528F7'}}>Already have an account?</Text>
      </TouchableOpacity> 
      </View>
      <View style={styles.ButtonContainer}>
        {  
           email.length > 0 && username.length > 0 && password.length > 0 ? <CustomTouchableOpacity 
        style={{backgroundColor: '#6528F7',width:'80%',alignSelf:'center',marginTop:20}}
        title="SignUp"
        onPress={() => {
          
          createuser(username,email,password)
        
        } }
        disabled
        /> : <CustomTouchableOpacity 
        style={{backgroundColor: '#D7BBF5',width:'80%',alignSelf:'center',marginTop:20}}
        title="SignUp"
        onPress={() => Alert.alert('Please fill all the fields')}
        
        />}
        
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
    marginTop:50
    
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

export default SignUp;
