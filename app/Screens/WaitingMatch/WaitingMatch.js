import { getAutoHeightDuration } from '@mui/material/styles/createTransitions';
import React, {useState,useEffect} from 'react';
import {View, StyleSheet, Image,Text, TouchableOpacity} from 'react-native';
import { SvgUri } from 'react-native-svg';
import CustomTouchableOpacity from '../../Components/Button/Button';
import * as queries from '../../../src/graphql/queries'
import { API, DataStore } from 'aws-amplify';
import awsconfig from '../../../src/aws-exports'
import { Auth } from 'aws-amplify';
import { listUserInfos } from '../../../src/graphql/queries';
import { listUsersData } from '../../../src/graphql/queries';
const WaitingScreen = ({navigation}) => {
  const [users,setUsers] = useState()
  const [NextToken,setNextToken] = useState()
  useEffect(()=>{
    fetchApi(10)
  },[])
 
  const fetchApi = async (limit) =>{
  //   let apiName = 'listUserInfos';
  // let path = '/listUsersInGroup';
  // let myInit = { 
  //     queryStringParameters: {
        
  //       "limit": limit,
  //       "token": nextToken
  //     },
  //     headers: {
  //       'Content-Type' : 'application/json',
  //       Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
  //     }
  // }
  // const { NextToken, ...rest } =  await API.get(apiName, path, myInit);
  // nextToken = NextToken;
  // console.log(rest,"rest")
  // return rest;


  try {
    let nextToken = await Auth.currentSession()
    // let nextToken = await Auth.currentSession().getAccessToken().getJwtToken()


    let nextjwt = nextToken.accessToken.jwtToken
    console.log(nextjwt,"==========================================")
    const { data , errors} = await API.graphql({
      query: listUsersData,
      variables: {
        filter : null,
        limit: 10, // Set the desired limit for each query
        token: nextjwt, // Use the nextToken to paginate
      },
    });
    if (errors) {
      console.error('GraphQL errors:', errors);
      return;
    }
    const newUsers = data.listUserInfos.items;
    const newNextToken = data.listUserInfos.nextToken;
console.log(data.listUserInfos.items,"here is data")
    setUsers((prevUsers) => [...prevUsers, ...newUsers]);
    setNextToken(nextjwt);
  } catch (error) {
    console.error('Error fetching user information:', error.data.listUsersData.items);
  }





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
