import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

const LoginScreen = ({navigation}) => {
  
    const [nickname, setNickname] = useState("");

    const goToChatroom = () => {
        if (nickname == ""){
            alert("Must enter a nickname to proceed!");
            return;
        }
        navigation.navigate("Chat",{nickname:nickname});
    }
  
    return ( 
        <View style={styles.body}>
            <View style={styles.maindiv}>
                <Image source={require("../assets/581-5818619_planting-trees-clipart.png")} style={styles.img}/>
                <Text style={styles.plainText1}> <b> Welcome </b> </Text>
                <TextInput style={styles.input} placeholder="Enter your nickname!" onChangeText={(nick)=>{setNickname(nick);}}/>
                     <TouchableOpacity style={styles.btn} onPress={()=>{goToChatroom();}}>
                         <Text style={styles.plainText2}> <b> Start Chatting ➤ </b></Text>
                    </TouchableOpacity>
            </View>      
        </View>
     );
}


const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: '#d5fffe',
      alignItems: 'center',
      justifyContent: 'center',
    },
    plainText1: {color: '#ffffff', fontSize:20, margin:5},
    plainText2: {color: '#caffc8', fontSize:13, margin:5},
    maindiv: {
        width:450, height:275, backgroundColor:'#003a6b', borderRadius:150, alignItems:'center', alignContent:'center',
    },
    img:{
        width:80, height:80, margin:15,
    },
    input:{width:275, height:30, borderRadius:20, textAlign:'center', backgroundColor:'#ffffff', margin:15},
    btn:{backgroundColor:'#000000', width:140, height:40, margin:10, borderRadius:100, alignItems:'center', justifyContent:'center', fontWeight:'bold',},
  });

export default LoginScreen;