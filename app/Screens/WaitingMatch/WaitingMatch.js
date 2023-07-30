import { getAutoHeightDuration } from '@mui/material/styles/createTransitions';
import React, {useState,useEffect} from 'react';
import {View, StyleSheet, Image,Text, TouchableOpacity} from 'react-native';
import { SvgUri } from 'react-native-svg';
import CustomTouchableOpacity from '../../Components/Button/Button';
import * as queries from '../../../src/graphql/queries'
import { API, DataStore } from 'aws-amplify';
const WaitingScreen = ({navigation}) => {
  useEffect(()=>{
    fetchApi()
  },[])

  const fetchApi = async () =>{
    const allTodos = await API.graphql({ query: queries.listUsersData });
    console.log(allTodos.data,"con")
  }

  const signOut = async () =>{
    await DataStore.clear()
    navigation.navigate("SignUp")
  }
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
                        width: '40%',
                        alignSelf: 'center',
                        // marginTop: 20,
                        }}
                    title="update tags"
                    onPress={() =>{ 
                      navigation.navigate("Message")
                      // navigation.navigate("TagsScreen")
                    }}
                />

<CustomTouchableOpacity
                    style={{
                        backgroundColor: '#8d7d37',
                        width: '40%',
                        alignSelf: 'center',
                        // marginTop: 20,
                        color:"black"
                        }}
                    title="Logout"
                    onPress={() => signOut()}
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
flex:1,
flexDirection:"row",
width:"100%",
justifyContent:"space-around"
  },
  ImageContainer:{
    flex:3
  }
});

export default WaitingScreen;
