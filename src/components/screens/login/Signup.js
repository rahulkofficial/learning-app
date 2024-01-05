import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
  View,
} from 'react-native';

import React,{useState} from 'react'

import Drop from '../../../assets/images/drop-down.svg'
import Phone from '../../../assets/images/phone.svg'
import Up from '../../../assets/images/up-arrow.svg'

  
  export default function Signup({ navigation }) {

    const [phone, setPhone] = React.useState('');
    const [error, setError] = React.useState('');

    const HandlePhone = () => {
      if(phone=="" || phone.length!=10 ){
        setError("Please enter valid phone number")
      }
      else{
        setError("")
        navigation.navigate('OTP',{phone_no:phone,method:method})
      }
    };
    const Error=()=>{
      if(error!=""){
        return(
          <Text style={{color:"red",fontSize:16,fontFamily:"DMSans-Light",marginTop:16,textAlign:"center"}}>{error}</Text>
        )
      }
    }

    const [active,setActive]=useState(false)
    const method="signup"


    const HandleClick=()=>(
      active?(<Up width={16} height={16} style={{position:"absolute",right:10}} />):(<Drop width={16} height={16} style={{position:"absolute",right:10}} />)
    )

    return (
      <SafeAreaView style={{flex:1,alignItems:"center",paddingTop:100,backgroundColor:"#fff"}}>
        <StatusBar translucent backgroundColor={"transparent"}/>
        <View>
          <Image source={require('../../../assets/images/login-page.jpg')} />
        </View>
        <View>
          <Text style={{color:"#000",fontSize:28,fontFamily:"DMSans-Medium",marginTop:50,textAlign:"center"}}>Create your account</Text>
          <Text style={{color:"#A6A5A5",fontSize:16,fontFamily:"DMSans-Light",marginTop:16,textAlign:"center"}}>Signup with your phone number</Text>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",marginRight:24}}>
          <TouchableOpacity onPress={()=>setActive(!active)} style={{flexDirection:"row",alignItems:"center",flex:1,position:"relative"}}>
            <Image source={require('../../../assets/images/flag.png')} style={{width:100,height:100}} />
            <HandleClick />
          </TouchableOpacity>
          <View style={{flex:2.5}}>
            <View style={{flexDirection:"row",alignItems:"center",borderColor:"#EAEAEA",borderWidth:1,borderRadius:10,paddingHorizontal:16}}>
              <Phone width={26} height={26} />
              <Text style={{marginLeft:4, color:"#000",fontFamily:"Quantico-Bold",fontSize:16}}>+91</Text>
              <TextInput textContentType="telephoneNumber" maxLength={10}
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad" 
                style={{color:"#000",fontFamily:"Quantico-Bold",fontSize:16,width:166,marginLeft:4}} />
            </View>
          </View>
        </View>
        <Error />
        <View style={{width:"100%",paddingHorizontal:24,marginTop:20}}>
          <TouchableOpacity onPress={HandlePhone} style={{backgroundColor:"#7974B3",padding:16,borderRadius:10}}><Text style={{textAlign:"center",color:"#fff",fontFamily:"DMSans-Medium",fontSize:16}}>Join Now</Text></TouchableOpacity>
        </View>
        <View style={{marginTop:16,flexDirection:"row",alignItems:"center"}}>
          <Text style={{color:"#A6A5A5",fontFamily:"DMSans-Medium",fontSize:14}}>already have a account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} ><Text style={{color:"#3935AB",fontFamily:"DMSans-Medium",fontSize:14,marginLeft:4}}>Login</Text></TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
  