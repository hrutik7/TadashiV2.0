import React,{useState} from "react";
import { View,StyleSheet,Image,Text,TouchableOpacity } from "react-native";
import PopupModal from "../../Components/PopupModal/PopModal";


const Warning = () => {


    return(   
        <View style={styles.container}>
            <PopupModal
            buttonText={'Warning'}
            modalContent={'This is a warning message'}
/>
        </View>
    )


}
const styles = StyleSheet.create({
    container: {
      flex: 1,
     
      alignItems: 'center',
      justifyContent: 'center',
    }
  });


export default Warning;