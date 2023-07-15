import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
// import InputField from '../../components/InputField';
import InputField from '../../Components/InputField/InputField';
import CustomTouchableOpacity from '../../Components/Button/Button';
const Login = () => {
  const [Username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

      <View style={styles.ButtonContainer}>
          <CustomTouchableOpacity
          style={{backgroundColor: '#6528F7',width:'80%',alignSelf:'center',marginTop:20}}
            title="Sign Up"
            onPress={() => console.log('Login')}
          />
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
    height: 300,
  },
});

export default Login;
