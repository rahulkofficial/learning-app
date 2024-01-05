import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View,
  } from 'react-native';
  
  import React from 'react'
  import * as Progress from 'react-native-progress';
  
  import Back from '../../../assets/images/back-arrow.svg'

  export default function Learning({route,navigation}) {

    const lecture=route.params.lect
    const [state, setState] = React.useState('all');
    const bg1=()=>{
      if(state=="all"){
        return(
          {
          color:"#51459F",
          fontSize:18,
          fontFamily:"DMSans-Medium",
          paddingBottom:5,
          borderBottomWidth:2,
          borderBottomColor:"#51459F"
          }
        )
      }
      else{
        return(
          {
            color:"#676767",
            fontSize:18,
            fontFamily:"DMSans-Medium",
            paddingBottom:5,
          }
        )
      }
    }
    const bg2=()=>{
      if(state=="ongoing"){
        return(
          {
          color:"#51459F",
          fontSize:18,
          fontFamily:"DMSans-Medium",
          paddingBottom:5,
          borderBottomWidth:2,
          borderBottomColor:"#51459F"
          }
        )
      }
      else{
        return(
          {
            color:"#676767",
            fontSize:18,
            fontFamily:"DMSans-Medium",
            paddingBottom:5,
          }
        )
      }
    }
    const bg3=()=>{
      if(state=="completed"){
        return(
          {
          color:"#51459F",
          fontSize:18,
          fontFamily:"DMSans-Medium",
          paddingBottom:5,
          borderBottomWidth:2,
          borderBottomColor:"#51459F"
          }
        )
      }
      else{
        return(
          {
            color:"#676767",
            fontSize:18,
            fontFamily:"DMSans-Medium",
            paddingBottom:5,
          }
        )
      }
    }

    const Body=()=>(
      (state=="all")?(
        lecture.map((item)=>{
          if(item.progress==1){
            return(
              <TouchableOpacity onPress={()=>navigation.navigate('Videos')} key={item.id} style={{marginBottom:8,backgroundColor:"#fff",padding:20,flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderRadius:10}}>
                <View style={{backgroundColor:"#84E9F4",borderRadius:10,padding:10,width:"22%",alignItems:"center"}}>
                  <Image source={item.image} style={{width:40,height:40}} />
                </View>
                <View style={{width:"22%"}}>
                  <Text style={{color:"#000",fontFamily:"DMSans-Bold",fontSize:16}}>{item.title}</Text>
                  <Text style={{color:"#84E9F4",fontFamily:"DMSans-Light",fontSize:12,marginTop:6}}>Finished</Text>
                </View>
                <View style={{width:"48%"}}>
                  <Progress.Bar width={170} borderColor="transparent" unfilledColor='rgba(173, 216, 230,0.4)' 
                                color='#84E9F4' progress={item.progress} />
                </View>
              </TouchableOpacity>
            )
          }
          else{
            return(
              <TouchableOpacity onPress={()=>navigation.navigate('Videos')} key={item.id} style={{marginBottom:8,backgroundColor:"#fff",padding:20,flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderRadius:10}}>
                <View style={{backgroundColor:"#51459F",borderRadius:10,padding:10,width:"22%",alignItems:"center"}}>
                  <Image source={item.image} style={{width:40,height:40}} />
                </View>
                <View style={{width:"22%"}}>
                  <Text style={{color:"#000",fontFamily:"DMSans-Bold",fontSize:16}}>{item.title}</Text>
                  <Text style={{color:"#3935AB",fontFamily:"DMSans-Light",fontSize:12,marginTop:6}}>Running...</Text>
                </View>
                <View style={{width:"48%"}}>
                  <Progress.Bar width={170} borderColor="transparent" unfilledColor='rgba(0,0,225,0.2)' 
                                color='rgba(0,0,225,1)' progress={item.progress} />
                </View>
              </TouchableOpacity>
            )
          }
        })):(
          (state=="ongoing")?(
            lecture.map((item)=>{
              if(item.progress<1){
                return(
                  <TouchableOpacity onPress={()=>navigation.navigate('Videos')} key={item.id} style={{marginBottom:8,backgroundColor:"#fff",padding:20,flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderRadius:10}}>
                    <View style={{backgroundColor:"#51459F",borderRadius:10,padding:10,width:"22%",alignItems:"center"}}>
                      <Image source={item.image} style={{width:40,height:40}} />
                    </View>
                    <View style={{width:"22%"}}>
                      <Text style={{color:"#000",fontFamily:"DMSans-Bold",fontSize:16}}>{item.title}</Text>
                      <Text style={{color:"#3935AB",fontFamily:"DMSans-Light",fontSize:12,marginTop:6}}>Running...</Text>
                    </View>
                    <View style={{width:"48%"}}>
                      <Progress.Bar width={170} borderColor="transparent" unfilledColor='rgba(0,0,225,0.2)' 
                                    color='rgba(0,0,225,1)' progress={item.progress} />
                    </View>
                  </TouchableOpacity>
                )
              }
            })
          ):(
            lecture.map((item)=>{
              if(item.progress==1){
                return(
                  <TouchableOpacity onPress={()=>navigation.navigate('Videos')} key={item.id} style={{marginBottom:8,backgroundColor:"#fff",padding:20,flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderRadius:10}}>
                    <View style={{backgroundColor:"#84E9F4",borderRadius:10,padding:10,width:"22%",alignItems:"center"}}>
                      <Image source={item.image} style={{width:40,height:40}} />
                    </View>
                    <View style={{width:"22%"}}>
                      <Text style={{color:"#000",fontFamily:"DMSans-Bold",fontSize:16}}>{item.title}</Text>
                      <Text style={{color:"#84E9F4",fontFamily:"DMSans-Light",fontSize:12,marginTop:6}}>Finished</Text>
                    </View>
                    <View style={{width:"48%"}}>
                      <Progress.Bar width={170} borderColor="transparent" unfilledColor='rgba(173, 216, 230,0.4)' 
                                    color='#84E9F4' progress={item.progress} />
                    </View>
                  </TouchableOpacity>
                )
              }
            })
          )
        )

    )

    return (
      <SafeAreaView style={{flex:1,paddingVertical:24,backgroundColor:"#EAEAEA"}}>
        <StatusBar translucent backgroundColor={"transparent"}/>
        <View style={{flexDirection:"row",alignItems:"center",paddingTop:24,paddingHorizontal:24}}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}><Back/></TouchableOpacity>
          <Text style={{color:"#676767",fontFamily:'DMSans-Medium',fontSize:16,marginLeft:16}}>Today's lectures</Text>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:30,paddingHorizontal:16}}>
          <TouchableOpacity onPress={()=>setState("all")}><Text style={bg1()}>Lectures</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>setState("ongoing")}><Text style={bg2()}>Ongoing</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>setState("completed")}><Text style={bg3()}>Completed</Text></TouchableOpacity>
        </View>
        <ScrollView style={{marginBottom:40,marginTop:20,paddingHorizontal:6}}>
          <Body/>
        </ScrollView>
      </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    tab:{
      color:"#676767",
      fontSize:18,
      fontFamily:"DMSans-Medium",
      borderBottomWidth:2,
      borderBottomColor:"#51459F"
      
    }
  })
  