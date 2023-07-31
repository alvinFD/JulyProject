import React, { useState } from "react";
import {TextInput, View, Button, Text, Alert} from "react-native";
import { useNavigation } from "@react-navigation/core";

let arr= [["Alvin","Alvin"]]
const SignIn = () =>{

    const [userid, setuserid] = useState('');
    const [password, setpassword] = useState('');
    const navigation = useNavigation()


    function handleSignIn() {
        if (userid.trim() === '' || password.trim() === ''){
            Alert.alert('Input is empty!')}
        for (let i =0; i<arr.length;i++){
            if (userid===arr[i][0]){
                if (password===arr[i][1]){
                    navigation.navigate('CatagoryList');return
                }else{Alert.alert('Password is wrong!');return};
            }
        }Alert.alert('Please SignUp')
        /*if (userid.trim() === password.trim()){
            navigation.navigate('Content')
        }
        Alert.alert('Password is wrong!')*/
    };
    function handleSignUp() {
        if (userid.trim() === '' || password.trim() === ''){
            Alert.alert('Input is empty!')}
        for (let i =0; i<arr.length;i++){
            if (userid===arr[i][0]){
                Alert.alert("UserID is used");return
            }
        }arr.push([userid,password])
        Alert.alert('SignUp Successfully')
        Alert.alert(JSON.stringify(arr));return
    };


    return(
        <View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
            <Text>Hello</Text>
            <TextInput style={{height: 40,width:200, borderColor:'black', borderWidth:1}}
            placeholder="user id"
            onChangeText={setuserid}
            value={userid}>
                
            </TextInput>
            <TextInput style={{height: 40,width: 200, borderColor:'black', borderWidth:1}}
            placeholder="password"
            secureTextEntry
            onChangeText={setpassword}
            value={password}>
            </TextInput>
            <View style={{flexDirection:"row"}}>
            <Button onPress={() =>handleSignIn()} title='SignIn'></Button>
            <Button onPress={() =>handleSignUp()} title='SignUp'></Button>            
            </View>
            </View>
    )
}
export default SignIn