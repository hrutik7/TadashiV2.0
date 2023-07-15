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
    <View style={{
      flex: 1,
      backgroundColor:"#EDE4FF"
      
    }}>
      <View style={styles.LogoContainer}>
      <Image 
      style={styles.image}
      source={require('../../Assets/Tadashi.png')}
      />
      </View>

      <View style={styles.InputContainer}></View>

      <View style={styles.ButtonContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"green",
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogoContainer: {
    flex:3,
    width : "100%",
    
    alignItems:"center",
    
  },
  InputContainer: {
    flex:2
  },
  ButtonContainer: {
    flex:1
  },
  image: {
    
    width: "100%",
    height: 300,
  },
});

export default Login;
