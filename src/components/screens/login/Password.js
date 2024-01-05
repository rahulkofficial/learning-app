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

import Lock from '../../../assets/images/password-lock.svg'
import Unseen from '../../../assets/images/dont-view.svg'
import Completeed from '../../../assets/images/compleated.svg'
  
  export default function Password({navigation,route}) {
    const name=route.params.param
    const[password,setPassword]=useState('');
    const[error,setError]=useState('');

    const Requirement1=()=>{
      if(password.length>=8){
        return(
          <View style={{alignSelf:"flex-start",paddingLeft:24,marginTop:20,flexDirection:"row",alignItems:"center"}}>
            <Completeed style={{marginRight:10}}/>
            <Text style={{color:"#7974B3",fontFamily:"DMSans-Regular",fontSize:14}}>Should contain atleast 8 characters</Text>
          </View>
        )
      }
      else{
        return(
          <View style={{alignSelf:"flex-start",paddingLeft:24,marginTop:20,flexDirection:"row",alignItems:"center"}}>
            <View style={{marginRight:10,width:20,height:20,borderRadius:50,borderColor:"#A6A5A5",borderWidth:1}}></View>
            <Text style={{color:"#A6A5A5",fontFamily:"DMSans-Regular",fontSize:14}}>Should contain atleast 8 characters</Text>
          </View>
        )
      }
    }
    const Requirement2=()=>{
      if(/[a-z]/.test(password)){
        return(
          <View style={{alignSelf:"flex-start",paddingLeft:24,marginTop:10,flexDirection:"row",alignItems:"center"}}>
            <Completeed style={{marginRight:10}}/>
            <Text style={{color:"#7974B3",fontFamily:"DMSans-Regular",fontSize:14}}>Should contain a lowercase (small) letter (a-z)</Text>
          </View>
        )
      }
      else{
        return(
          <View style={{alignSelf:"flex-start",paddingLeft:24,marginTop:10,flexDirection:"row",alignItems:"center"}}>
            <View style={{marginRight:10,width:20,height:20,borderRadius:50,borderColor:"#A6A5A5",borderWidth:1}}></View>
            <Text style={{color:"#A6A5A5",fontFamily:"DMSans-Regular",fontSize:14}}>Should contain a lowercase (small) letter (a-z)</Text>
          </View>
        )
      }
    }
    const Requirement3=()=>{
      if(/[A-Z]/.test(password)){
        return(
          <View style={{alignSelf:"flex-start",paddingLeft:24,marginTop:10,flexDirection:"row",alignItems:"center"}}>
            <Completeed style={{marginRight:10}}/>
            <Text style={{color:"#7974B3",fontFamily:"DMSans-Regular",fontSize:14}}>Should contain a uppercase (capital) letter (A-Z)</Text>
          </View>
        )
      }
      else{
        return(
          <View style={{alignSelf:"flex-start",paddingLeft:24,marginTop:10,flexDirection:"row",alignItems:"center"}}>
            <View style={{marginRight:10,width:20,height:20,borderRadius:50,borderColor:"#A6A5A5",borderWidth:1}}></View>
            <Text style={{color:"#A6A5A5",fontFamily:"DMSans-Regular",fontSize:14}}>Should contain a uppercase (capital) letter (A-Z)</Text>
          </View>
        )
      }
    }
    const Requirement4=()=>{
      if(/[0-9]/.test(password)){
        return(
          <View style={{alignSelf:"flex-start",paddingLeft:24,marginTop:10,flexDirection:"row",alignItems:"center"}}>
            <Completeed style={{marginRight:10}}/>
            <Text style={{color:"#7974B3",fontFamily:"DMSans-Regular",fontSize:14}}>Should contain at least one number (0-9)</Text>
          </View>
        )
      }
      else{
        return(
          <View style={{alignSelf:"flex-start",paddingLeft:24,marginTop:10,flexDirection:"row",alignItems:"center"}}>
            <View style={{marginRight:10,width:20,height:20,borderRadius:50,borderColor:"#A6A5A5",borderWidth:1}}></View>
            <Text style={{color:"#A6A5A5",fontFamily:"DMSans-Regular",fontSize:14}}>Should contain at least one number (0-9)</Text>
          </View>
        )
      }
    }
    const Requirement5=()=>{
      if(/[$,@,#,%,!,*,?,&]/.test(password)){
        return(
          <View style={{alignSelf:"flex-start",paddingLeft:24,marginTop:10,flexDirection:"row",alignItems:"center"}}>
            <Completeed style={{marginRight:10}}/>
            <Text style={{color:"#7974B3",fontFamily:"DMSans-Regular",fontSize:14}}>Should contain at least one symbol ($,@,#,%,!,*,?,&)</Text>
          </View>
        )
      }
      else{
        return(
          <View style={{alignSelf:"flex-start",paddingLeft:24,marginTop:10,flexDirection:"row",alignItems:"center"}}>
            <View style={{marginRight:10,width:20,height:20,borderRadius:50,borderColor:"#A6A5A5",borderWidth:1}}></View>
            <Text style={{color:"#A6A5A5",fontFamily:"DMSans-Regular",fontSize:14}}>Should contain at least one symbol ($,@,#,%,!,*,?,&)</Text>
          </View>
        )
      }
    }

    const handleClick=()=>{
      if((/[$,@,#,%,!,*,?,&]/.test(password)) && (/[0-9]/.test(password)) && (/[a-z]/.test(password)) && (/[A-Z]/.test(password)) && (password.length>=8) ){
        setError("");
        navigation.navigate('AppScreen',{param:name});
      }
      else{
        setError("Password does not meet requirements.")
      }
    }

    const Error=()=>{
      if(error!=""){
        return(
          <View style={{alignSelf:"flex-start",paddingLeft:24,marginTop:6,}}>
            <Text style={{color:"#DE3730",fontSize:16,fontFamily:"DMSans-Medium"}}>{error}</Text>
          </View>
        )
      }
    }

    return (
      <SafeAreaView style={{flex:1,alignItems:"center",paddingTop:200,backgroundColor:"#fff"}}>
        <StatusBar translucent backgroundColor={"transparent"}/>
        <View>
          <Image source={require('../../../assets/images/password-page.jpg')} />
        </View>
        <View>
          <Text style={{color:"#000",fontSize:28,fontFamily:"DMSans-Medium",marginTop:100,textAlign:"center"}}>Set a Strong Password</Text>
          <Text style={{color:"#A6A5A5",fontSize:16,fontFamily:"DMSans-Light",marginTop:16,textAlign:"center"}}>Set a strong password for your account.</Text>
        </View>
        <View style={{width:"100%",paddingHorizontal:24,marginTop:20}}>
          <View style={{flexDirection:"row",alignItems:"center",paddingVertical:6,justifyContent:"space-between",borderColor:"#EAEAEA",borderWidth:1,borderRadius:10,paddingHorizontal:16}}>
            <Lock width={26} height={26} />
            <TextInput secureTextEntry value={password} onChangeText={setPassword} style={{color:"#000",fontFamily:"Quantico-Bold",fontSize:16,width:220}} />
            <TouchableOpacity>
              <Unseen width={26} height={26} />
            </TouchableOpacity>
          </View>
        </View>
        <Error/>
        <Requirement1/>
        <Requirement2/>
        <Requirement3/>
        <Requirement4/>
        <Requirement5/>
        <View style={{width:"100%",paddingHorizontal:24,marginTop:20}}>
          <TouchableOpacity onPress={handleClick} style={{backgroundColor:"#7974B3",padding:16,borderRadius:10}}>
            <Text style={{textAlign:"center",color:"#fff",fontFamily:"DMSans-Medium",fontSize:16}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
  