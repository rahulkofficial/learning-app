import {
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
    FlatList,
    Text,
    Image,
    View,
  } from 'react-native';
  
  import React from 'react'
  import * as Progress from 'react-native-progress';

  import Info from '../../../assets/images/information.svg'
  import Arrow from '../../../assets/images/right-arrow.svg'
  import Pay from '../../../assets/images/payment-history.svg'
  
  export default function Profile({route,navigation}) {

    const name=route.params.param
    const course=route.params.ongoing

    return (
      <SafeAreaView style={{flex:1,paddingHorizontal:20,backgroundColor:"#EAEAEA",paddingTop:120}}>
        <StatusBar translucent backgroundColor={"transparent"}/>
        <View>
          <View style={{alignItems:"center"}}>
            <Image source={require("../../../assets/images/person.jpg")} style={{borderRadius:70,width:140,height:140}} />
            <Text style={{color:"#676767",fontFamily:"DMSans-Bold",fontSize:26,marginTop:14}}>{name}</Text>
            <Text style={{color:"#999",fontFamily:"DMSans-Medium",fontSize:16,marginTop:10}}>{name.toLowerCase()}@example.com</Text>
          </View>
        </View>
        <View>
          <Text style={{color:"#000",fontFamily:"DMSans-Medium",fontSize:18,marginTop:30}}>Course You're Taking</Text>
          <View style={{marginTop:16}}>
          <FlatList
            data={course}
            renderItem={(item) => (
              <TouchableOpacity onPress={()=> navigation.navigate('Learning')} key={item.item.id} style={{backgroundColor:`${item.item.color}`,padding:16,borderRadius:16,marginRight:10}}>
                <Text style={{color:"#fff",fontFamily:'DMSans-Medium',fontSize:18}}>{item.item.title}</Text>
                <Text style={{color:"#fff",fontFamily:'DMSans-Light',fontSize:13,marginBottom:18,marginTop:6}}>{item.item.time} Hour Spend</Text>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                  <Text style={{marginRight:14,color:"#fff",fontFamily:'DMSans-Light',fontSize:13}}>{(item.item.progress)*100}%</Text>
                  <Progress.Bar width={120} borderColor="transparent" unfilledColor='rgba(225,225,225,0.5)' color='rgba(225,225,225,1)' progress={item.item.progress} />
                </View>
              </TouchableOpacity>
            )}
            horizontal
            keyExtractor={(item)=>item.id}
            showsHorizontalScrollIndicator={false}
          />
          </View>
        </View>
        <View>
          <Text style={{color:"#000",fontFamily:"DMSans-Medium",fontSize:18,marginTop:30}}>Account</Text>
          <View style={{marginTop:24}}>
            <TouchableOpacity style={{padding:20,backgroundColor:"#fff",borderRadius:10,flexDirection:"row",alignItems:'center',justifyContent:"space-between"}}>
                <View style={{flexDirection:"row",alignItems:'center'}}> 
                  <Info />
                  <Text style={{marginLeft:16,color:"#000",fontFamily:'DMSans-Regular',fontSize:14}}>Educational Information</Text>
                </View>
                <Arrow width={16} height={16}/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:10,padding:20,backgroundColor:"#fff",borderRadius:10,flexDirection:"row",alignItems:'center',justifyContent:"space-between"}}>
                <View style={{flexDirection:"row",alignItems:'center'}}> 
                  <Pay />
                  <Text style={{marginLeft:16,color:"#000",fontFamily:'DMSans-Regular',fontSize:14}}>Payment History</Text>
                </View>
                <Arrow width={16} height={16}/>
            </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>
    )
  }
  