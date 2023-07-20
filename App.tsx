/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useEffect,useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from "react-native-splash-screen"
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import InputField from './app/Components/InputField/InputField';
import Login from './app/Screens/Login/Login';
import WarningScreen from './app/Screens/WarningScreen/Warning';
import Gender from './app/Screens/Gender/Gender';
import Explain from './app/Screens/Explain/Explain';
import TagsScreen from './app/Screens/Tags/Tags';
import WaitingScreen from './app/Screens/WaitingMatch/WaitingMatch';
function App(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);
  

  return (
    <SafeAreaView style={{flex:1}} >
      
      <WaitingScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
