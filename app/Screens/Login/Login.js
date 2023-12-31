import React, {useState} from 'react';
import {View, StyleSheet, Image,Text, TouchableOpacity} from 'react-native';
// import InputField from '../../components/InputField';
import InputField from '../../Components/InputField/InputField';
import CustomTouchableOpacity from '../../Components/Button/Button';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Alert} from 'react-native';
import { Auth } from 'aws-amplify';
import { UserInfo } from '../../../src/models';
import {DataStore} from 'aws-amplify';
import {SQLiteAdapter} from '@aws-amplify/datastore-storage-adapter/SQLiteAdapter';
DataStore.configure({
  storageAdapter: SQLiteAdapter,
});

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login , setLogin] = useState(false)


  
  const signIn = async(username,password) =>{

    
    console.log(username,password)
    try {
      console.log('first');
      // {"cause": {"locations": null, 
      // "message": "Cannot return null for non-nullable type:
      //  'AWSTimestamp' within parent 'Restaurant' (/syncRestaurants/items[2]/_lastChangedAt)",
      //   "path": ["syncRestaurants", "items", 2, "_lastChangedAt"]}, "errorType": "BadRecord", "localModel": null,
      //    "message": "Cannot return null for non-nullable 
      //    type: 'AWSTimestamp' within parent 
      //    'Restaurant' (/syncRestaurants/items[2]/_lastChangedAt)", 
      //    "model": "Restaurant", "oper
      //    ation": "syncRest
      //    aurants", "process": "sync", "recoverySu
      //    ggestion": "Ensure app code is up to date, auth directiv
      //    es exist and are correct on each model, and that server-side data has not been invalidated by a schema change. 
      //    If the problem persists
      // , search for or create an issue: https://github.com/aws-amplify/amplify-js/issues", "remoteModel": null}
      const post = await DataStore.save(
        new UserInfo({
          username: username
        }),
      );
      console.log('Post saved successfully!', post);
    } catch (error) {
      console.log('Error saving post', error);
    }
    navigation.navigate('Explain')
    try {
      const user = await Auth.signIn(username, password);
      console.log(user,"user is here....")
    } catch (error) {
      console.log('error signing in', error);
    }
  
  }
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
          placeholder="password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={styles.AlreadyContainer}>
       <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>
      <Text style={{color: '#6528F7'}}>New to Tadashi</Text>
         </TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
          {
            username.length > 0 && password.length > 0 ? <CustomTouchableOpacity
          style={{backgroundColor: '#6528F7',width:'80%',alignSelf:'center',marginTop:20}}
            title="Submit"
            onPress={() => {
              signIn(username,password)
            }}
          />
        : <CustomTouchableOpacity
        style={{backgroundColor: '#A076F9',width:'80%',alignSelf:'center',marginTop:20}}
          title="Submit"
          onPress={() => login ?  console.log('Login') : console.log('Register')}
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
