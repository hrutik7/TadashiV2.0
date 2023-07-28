import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity,TextInput} from 'react-native';
// import InputField from '../../components/InputField';
import InputField from '../../Components/InputField/InputField';
import CustomTouchableOpacity from '../../Components/Button/Button';
import LargeInputBox from '../../Components/LargeInput/LargeInput';
import {Alert} from 'react-native';
import { ExplainYourself } from '../../../src/models';
import {DataStore} from 'aws-amplify';
import {SQLiteAdapter} from '@aws-amplify/datastore-storage-adapter/SQLiteAdapter';
DataStore.configure({
  storageAdapter: SQLiteAdapter,
});
const Explain = ({navigation}) => {
  const [eyour, setEyour] = useState('');
  

  const ExplainSave = async (a) =>{
    console.log(a,eyour,"test")
    try {
      console.log('first');
      const post = await DataStore.save(
        new ExplainYourself({
          explain: a
        }),
      );
      console.log('Post saved successfully!', post);
      navigation.navigate('TagsScreen')
    } catch (error) {
      console.log('Error saving post', error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.Titlecontainer}>Explain about yourself.....</Text>
      </View>

      <View style={styles.ExplainContainer}>
      {/* <InputField
          placeholder="Username"
          value={eyour}
          style={{width:"100%"}}
          onChangeText={text => {
            console.log(text,"on change text")
            setEyour(text)}}
        /> */}
        <TextInput
        multiline
        numberOfLines={4} // Adjust the number of lines as needed
        placeholder="Describe Here..."
        value={eyour}
          onChangeText={text => {
            console.log(text,"on change text")
            setEyour(text)}}
        
        style={{
          height: "50%", // Adjust the height as needed
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          width: '75%',
        }}
      />
        {/* <LargeInputBox 
         placeholder="Username"
          value={eyour}
          onChangeText={text => {
            console.log(text,"on change text")
            setEyour(text)}}
        /> */}
       
      </View>

      <View style={styles.nextContainer}>
        <CustomTouchableOpacity
            style={{
                backgroundColor: '#6528F7',
                width: '80%',
                alignSelf: 'center',
                // marginTop: 20,
                }}
            title="Next"
            onPress={() => ExplainSave(eyour)}
        />
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
  Explaintext: {
    // backgroundColor : '#6528F7',
    color: 'black',
    fontSize: 20,
    height: 50,
    paddingTop: 10,
    textAlign: 'center',
  },
  header: {
    flex: 0.7,
    marginTop: '20%',
  },
  Titlecontainer: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    marginTop: 20,
  },
  ExplainContainer: {
    flex: 3,
    
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '120%',
  },
  nextContainer:{
    flex: 1,
    width:"90%"
  }
});

export default Explain;
