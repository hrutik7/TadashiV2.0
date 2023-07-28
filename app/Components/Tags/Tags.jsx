
import React, { useState,useEffect } from 'react';
import { TextInput, View , Text ,StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import CustomTouchableOpacity from '../Button/Button';
import ResponsiveFontSize from 'react-native-responsive-fontsize';
// import { mutations } from '../../../src/graphql/mutations';
import mutations from '../../../src/graphql/mutations'
import { API } from "aws-amplify";
import { UserInfo } from '../../../src/models';
import { DataStore } from 'aws-amplify';
import { SQLiteAdapter } from '@aws-amplify/datastore-storage-adapter/SQLiteAdapter';

DataStore.configure({
  storageAdapter: SQLiteAdapter
});
const Tags = ({navigation}) => {
  const [text, setText] = useState('');
  const [inputarray,setInputarray] = useState([])
  const [username,setUsername] = useState('')
  const postUserData = async () => {
    try {
      const posts = await DataStore.query(UserInfo);
      setUsername(posts[0].name)
      console.log('Posts retrieved successfully!', JSON.stringify(posts, null, 2));
    } catch (error) {
      console.log('Error retrieving posts', error);
    }
    try {
      const userData = await API.graphql({
        query: mutations.createUsersData,
        variables: {
          input: {
            id: "1",
            name: username,
            tags: inputarray
          }
        }
      });
      console.log("userData", userData);
      changeScreen('WaitingScreen');
    } catch (err) {
      console.log("error creating user", err);
    }
  };


  const hadnleRemove = (id) => {
    setInputarray((prevArray) => {
      return prevArray.filter((item) => item.id !== id);
    });
  };
function changeScreen(screenName) {
  navigation.navigate(screenName);
}
  const handlePress = () => {
    if (text.trim() !== '') {
      // setInputarray((prevArray) => [...prevArray, text]); // Append the input value to the array
      setInputarray((prevArray) => [...prevArray, {
        id: Math.random().toString(),
        value: text
      }]);
      setText(''); // Clear the input field after submitting
    }
  };
  return (
    <View style={styles.container}>
        <View style={{width:"90%",flex:1}}>
            <Text style={styles.header}>
                Type the 5 things that you want to see in your mate .
            </Text>
        
      <TextInput
        multiline
        numberOfLines={4} // Adjust the number of lines as needed
        
        // onChangeText={setText}
        value={text}
        style={{
          height: 50, // Adjust the height as needed
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          width: '95%',
          borderRadius: 10,
          marginTop:30
        }}
        onChangeText={(text) => setText(text)}
        placeholder="Enter a Tag"
      />
</View>
<View style={styles.listcontainer}>
          {
              inputarray.map((item,index)=>{
                  return(
                      // <Text key={index}>{item}</Text>
                      <View key={index.key} style={{flex:1,flexDirection:"row"}}>
                      <TouchableOpacity onPress={()=>{
                hadnleRemove(item.id)
                      }} style={{flex:1,flexDirection:"row"}}>
                      <Text style={styles.tagtext}>{item.value}</Text>
                      </TouchableOpacity>
                      </View>
                  )
              }
              )
          }
      </View>
      <View style={styles.btncontainer}>
      {inputarray.length === 5 ?<CustomTouchableOpacity
        title="Search Partner"
        onPress={() => {
          postUserData()
      
        }}
        style={{
          marginTop: 30,
          width: '95%',
          backgroundColor: '#6528F7',
          borderRadius: 10,
          padding: 10,
        }}
      />:<CustomTouchableOpacity
      title="Submit"
      onPress={() => {
        handlePress(); 
      }}
      style={{
        marginTop: 30,
        width: '95%',
        backgroundColor: '#6528F7',
        borderRadius: 10,
        padding: 10,
      }}
    /> }
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#EDE4FF',
      
    },
    header:{
      // flex:1,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        // width:"50%"
    },
    tagtext:{
      // flex:1,
        fontSize: 16,
        // fontWeight: 'bold',
        color: '#333',
        // width:"50%"
        borderColor:"#6528F7",
        borderWidth:1,
        borderRadius:10,
        padding:6,
        height:37
        ,backgroundColor:"#D7BBF5"

    },
    btncontainer:{
      flex:1,
      backgroundColor:"#EDE4FF",
        width:"92%",
        alignItems:"center"
    },
    listcontainer : {
      flex:1,
      flexDirection:"row",
      width:"90%",
    }
  })
export default Tags;
