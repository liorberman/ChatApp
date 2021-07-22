import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import firebase from '../Fire';

const ChatScreen = ({navigation}) => {
    
    const [nickname, setNickname] = useState(navigation.getParam("nickname")); // received from the login
    const [message, setMessage] = useState("");
    const [chatList, setChatList] = useState([]);

    const send = () => {
        const ref = firebase.database().ref("chat");
        const newMessage = {
            user:nickname, msg:message,
        };

        if (message != ""){
            ref.push(newMessage); // send to firebase
            setMessage("");
            update(); // see the current chatroom status after each message sent
        }
        else {
            alert("You have to write something!");
            return;
        }
    }

    const update = () => {
        const ref = firebase.database().ref("chat");
        ref.on("value", (snapshot)=>{
            snapshot.forEach(()=>{
                const allMessages = snapshot.val();
                var tempList = [];
                for (let i in allMessages){
                    tempList.push(allMessages[i]);
                }
                setChatList(tempList.reverse()); // new messages will showup on top
            });
        });  
    }

    useEffect(() => {
        update();
    },[]); 
    
    return (  
        <ScrollView style={styles.body}>
            <Text style={styles.plainText1}> <b> Hello {nickname}! 😃</b> </Text>
            <View style={styles.maindiv}>
                <TextInput style={styles.txtinput} value={message} onChangeText={(value)=>{setMessage(value);}} placeholder="You were saying?">

                </TextInput>
                <TouchableOpacity style={styles.btn} onPress={send}>
                         <Text style={styles.plainText4}> <b> Send ➤ </b></Text>
                </TouchableOpacity>
                <Text style={styles.plainText2}> <i> What is everyone talking about? </i> </Text>
                 <View style={styles.chatroom}>{chatList.map((user)=>
                    <View style={styles.msg}><Text style={styles.plainText3}>{user.user}:  {user.msg}</Text></View>)}
                </View>
            </View>   
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: '#d5fffe',
      alignItems: 'center',
      justifyContent: 'center',
    },
    maindiv: {width:500, paddingBottom:30, backgroundColor:'#003a6b', borderRadius:150, alignItems:'center', alignContent:'center',},

    plainText1: {color: '#003a6b', fontSize:18, margin:15},
    plainText2:{color:'#caffc8', fontSize:18, margin:15, marginTop:20},
    plainText3:{color:'#d5fffe', fontSize:13, margin:8, },
    plainText4:{color:'#ffffff', fontSize:16, margin:5, },

    txtinput:{width:375, height:100, textAlign:'center', justifyContent:'center', backgroundColor:'#ffffff', borderRadius:70, marginTop:50},
    btn:{backgroundColor:'#000000', width:140, height:40, marginTop:20, borderRadius:100, alignItems:'center', justifyContent:'center',},
    chatroom:{margin:15, textAlign:'center', alignItems:'center'},
    msg:{width:350, height:30, margin:5, borderRadius:8, borderWidth:1,
        borderLeftColor:'#1a5a90', borderBottomColor:'#1a5a90',
        borderRightColor:'#003a6b', borderTopColor:'#003a6b', alignContent:'center', }
  });
 
export default ChatScreen;