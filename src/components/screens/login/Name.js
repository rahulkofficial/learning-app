import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
  View,
} from 'react-native';

import React, { useState } from 'react'

import Profile from '../../../assets/images/profile.svg'
  
  export default function Name({route,navigation}) {

    const [name,setName]=useState('')
    const [error,setError]=useState('')

    const method=route.params.method

    const handleSubmit=()=>{
      if(name==""){
        setError("Please enter your name!!!")
      }
      else{
        if(method=="login"){
          navigation.navigate('AppScreen',{param:name});
        }
        else{
          navigation.navigate('Password',{param:name});
        }
        setError('');
      }
    }

    const Error=()=>{
      if(error!=""){
        return(
          <Text style={{color:"#DE3730",fontSize:16,fontFamily:"DMSans-Light",marginTop:16,textAlign:"center"}}>{error}</Text>
        )
      }
    }

    return (
      <SafeAreaView style={{flex:1,alignItems:"center",backgroundColor:"#fff",paddingTop:160}}>
        <StatusBar translucent backgroundColor={"transparent"}/>
        <View>
          <Image source={require('../../../assets/images/name-page.jpg')} />
        </View>
        <View>
          <Text style={{color:"#000",fontSize:28,fontFamily:"DMSans-Medium",marginTop:80,textAlign:"center"}}>Enter your name</Text>
          <Text style={{color:"#A6A5A5",fontSize:16,fontFamily:"DMSans-Light",marginTop:16,textAlign:"center"}}>Enter your full name for your account.</Text>
        </View>
        <View style={{width:"100%",paddingHorizontal:24}}>
          <View style={{flexDirection:"row",paddingVertical:4,marginTop:20,alignItems:"center",borderColor:"#EAEAEA",borderWidth:1,borderRadius:10,paddingHorizontal:16}}>
            <Profile width={26} height={26} />
            <TextInput placeholder='Enter Name' value={name} onChangeText={setName} placeholderTextColor={"#A6A5A5"} textContentType="telephoneNumber" style={{color:"#000",fontFamily:"DMSans-Regular",fontSize:16,width:276,marginLeft:10}} />
          </View>
        </View>
        <Error />
        <View style={{width:"100%",paddingHorizontal:24,marginTop:180}}>
          <TouchableOpacity onPress={handleSubmit} style={{backgroundColor:"#7974B3",padding:16,borderRadius:10}}>
            <Text style={{textAlign:"center",color:"#fff",fontFamily:"DMSans-Medium",fontSize:16}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
  