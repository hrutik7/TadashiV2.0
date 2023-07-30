import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {DataStore} from 'aws-amplify';
import {SQLiteAdapter} from '@aws-amplify/datastore-storage-adapter/SQLiteAdapter';
import { UserInfo } from '../../../src/models';
import { GenderInfo } from '../../../src/models';
DataStore.configure({
  storageAdapter: SQLiteAdapter,
});

const Gender = ({navigation}) => {
  

  const saveGender = async(gender) =>{
    try {
      const post = await DataStore.save(
        new GenderInfo({
          gender: gender
        }),
      );
      console.log('gender saved successfully!', post);
      navigation.navigate("Explain")
    } catch (error) {
      console.log(error,"err hain")
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.Titlecontainer}>What You Are Looking For?</Text>
      </View>

      <View style={styles.GenderContainer}>
        <TouchableOpacity
          style={{height:220}}
          onPress={() => saveGender("male")}>
          <Image
            style={{width: 150, height: 150}}
            source={require('../../Assets/male.png')}
          />
          <Text style={styles.gendertext}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          
          onPress={() => saveGender("female")}>
          <Image
            style={{width: 150, height: 150}}
            source={require('../../Assets/female.png')}
          />
          <Text style={styles.gendertext}>Female</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EDE4FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gendertext: {
    // backgroundColor : '#6528F7',
    color: 'black',
    fontSize: 20,
    height: 50,
    paddingTop: 10,
    textAlign: 'center',
  },
  header: {
    flex: 1,
    marginTop: '20%',
  },
  Titlecontainer: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    marginTop: 20,
  },
  GenderContainer: {
    flex: 6,
    marginBottom: 120,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
});

export default Gender;
