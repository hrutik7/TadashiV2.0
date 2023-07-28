import { getAutoHeightDuration } from '@mui/material/styles/createTransitions';
import React, {useState} from 'react';
import {View, StyleSheet, Image,Text, TouchableOpacity} from 'react-native';
import { SvgUri } from 'react-native-svg';
import CustomTouchableOpacity from '../../Components/Button/Button';
const WaitingScreen = ({navigation}) => {
  
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={{fontSize:30,justifyContent:"center",alignContent:"center"}}>
                Wait we are finding your soulmate ...
            </Text>
        </View>
        <View style={styles.ImageContainer}>
            <Image
                style={{width:300,height:300}}
                source={require('../../Assets/wait.png')}
            />

        </View>    

        <View style={styles.btnContainer}>
                <CustomTouchableOpacity
                    style={{
                        backgroundColor: '#6528F7',
                        width: '80%',
                        alignSelf: 'center',
                        // marginTop: 20,
                        }}
                    title="change preferences"
                    onPress={() => console.log('Login')}
                />


        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#EDE4FF",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:50
  },
  image:{
    // width:"90%"
    
  },
  header:{
    flex:1
  },
  btnContainer:{
flex:2,
width:"100%",
  },
  ImageContainer:{
    flex:3
  }
});

export default WaitingScreen;
