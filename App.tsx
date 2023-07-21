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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);
  

  return (
    <NavigationContainer>{/* Rest of your app code */}
    
      
    <Stack.Navigator>
    
        <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
   
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
