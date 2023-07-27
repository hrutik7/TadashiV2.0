import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
// import InputField from '../../components/InputField';
import InputField from '../../Components/InputField/InputField';
import CustomTouchableOpacity from '../../Components/Button/Button';
import LargeInputBox from '../../Components/LargeInput/LargeInput';
import {Alert} from 'react-native';
import { ExplainYourself } from '../../../src/models';
const Explain = ({navigation}) => {
  const [eyour, setEyour] = useState('');
  

  const ExplainSave = async (a) =>{
    try {
      console.log('first');
      const post = await ExplainYourself.save(
        new UserInfo({
          explain: a
        }),
      );
      console.log('Post saved successfully!', post);
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
        
        <LargeInputBox 
         onChangeText={text => setEyour(text)}
        />
       
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
    width: '100%',
  },
  nextContainer:{
    flex: 1,
    width:"90%"
  }
});

export default Explain;
