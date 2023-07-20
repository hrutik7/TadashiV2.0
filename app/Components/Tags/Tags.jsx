
import React, { useState } from 'react';
import { TextInput, View , Text ,StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import CustomTouchableOpacity from '../Button/Button';
import ResponsiveFontSize from 'react-native-responsive-fontsize';
const Tags = () => {
  const [text, setText] = useState('');
  const [inputarray,setInputarray] = useState([])

  const handlePress = () => {
    if (text.trim() !== '') {
      setInputarray((prevArray) => [...prevArray, text]); // Append the input value to the array
      
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
                      <View key={index} style={{flex:1,flexDirection:"row"}}>
                      <TouchableOpacity onPress={()=>{
                setInputarray(inputarray.splice(index,1)) 
                      }} style={{flex:1,flexDirection:"row"}}>
                      <Text style={styles.tagtext}>{item}</Text>
                      </TouchableOpacity>
                      </View>
                  )
              }
              )
          }
      </View>
      <View style={styles.btncontainer}>
      <CustomTouchableOpacity
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
      />
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
