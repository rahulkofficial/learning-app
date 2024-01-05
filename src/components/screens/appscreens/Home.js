import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  
  import React, { useState } from 'react'
  import Carousel, { Pagination } from 'react-native-snap-carousel'
  import * as Progress from 'react-native-progress';

  import Notification from "../../../assets/images/notification.svg"
  import Play from "../../../assets/images/white-play-button.svg"
  
  export default function Home({ route,navigation }){

    let name=route.params.param
    const lecture=route.params.lect
    const going=route.params.ongoing

  const [course,setCourse]=useState([
    {
      id:1,
      title:"UI/UX Design",
      classes:"03",
      image:require("../../../assets/images/ui-ux.jpg"),
      color:"#51459F",
    },
    {
      id:2,
      title:"Derivation",
      classes:"05",
      image:require("../../../assets/images/derivation.jpg"),
      color:"#84E9F4",
    },
    {
      id:3,
      title:"Photoshop",
      classes:"08",
      image:require("../../../assets/images/photoshop.jpg"),
      color:"#3935AB",
    },
    {
      id:4,
      title:"Business",
      classes:"03",
      image:require("../../../assets/images/bussiness.jpg"),
      color:"#DE3730",
    },
  ])
  

  const isCarousel = React.useRef(null)
  const [index, setIndex]=useState(0)

  const Course=()=>(
    course.map((item)=>(
        <TouchableOpacity onPress={() => navigation.navigate('Learning')} key={item.id} style={{marginBottom:6,width:"48%",alignSelf:"baseline",padding:20,backgroundColor:`${item.color}`,borderRadius:10}}>
          <Text style={{color:"#fff",fontFamily:"DMSans-Medium",fontSize:16}}>{item.title}</Text>
          <View style={{flexDirection:"row",alignItems:"center",marginTop:5}}>
            <View>
              <Text style={{color:"rgba(225,225,225,0.6)",fontFamily:"DMSans-Medium",fontSize:10}}>{item.classes} classes</Text>
              <View style={{backgroundColor:'rgba(225,225,225,0.6)',alignSelf:"baseline",padding:10,borderRadius:10,marginTop:26}}>
                <Play/>
              </View>
            </View>
            <View style={{marginLeft:10}}>
              <Image style={{width:60,height:60}} source={item.image}/>
            </View>
          </View>
        </TouchableOpacity>
      )
    )
  )

  const Lecture=()=>(
    lecture.map((item)=>{
      if(item.progress==1){
        return(
          <TouchableOpacity onPress={() => navigation.navigate('Learning')} key={item.id} style={{marginBottom:8,backgroundColor:"#fff",padding:20,flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderRadius:10}}>
            <View style={{backgroundColor:"#84E9F4",borderRadius:10,padding:10,width:"22%",alignItems:"center"}}>
              <Image source={item.image} style={{width:40,height:40}} />
            </View>
            <View style={{width:"22%"}}>
              <Text style={{color:"#000",fontFamily:"DMSans-Medium",fontSize:16}}>{item.title}</Text>
              <Text style={{color:"#84E9F4",fontFamily:"DMSans-Light",fontSize:12,marginTop:6}}>Finished</Text>
            </View>
            <View style={{width:"46%"}}>
              <Progress.Bar width={140} borderColor="transparent" unfilledColor='rgba(173, 216, 230,0.4)' 
                            color='#84E9F4' progress={item.progress} />
            </View>
          </TouchableOpacity>
        )
      }
      else{
        return(
          <TouchableOpacity onPress={() => navigation.navigate('Learning')} key={item.id} style={{marginBottom:8,backgroundColor:"#fff",padding:20,flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderRadius:10}}>
            <View style={{backgroundColor:"#51459F",borderRadius:10,padding:10,width:"22%",alignItems:"center"}}>
              <Image source={item.image} style={{width:40,height:40}} />
            </View>
            <View style={{width:"22%"}}>
              <Text style={{color:"#000",fontFamily:"DMSans-Medium",fontSize:16}}>{item.title}</Text>
              <Text style={{color:"#3935AB",fontFamily:"DMSans-Light",fontSize:12,marginTop:6}}>Running...</Text>
            </View>
            <View style={{width:"46%"}}>
              <Progress.Bar width={140} borderColor="transparent" unfilledColor='rgba(0,0,225,0.2)' 
                            color='rgba(0,0,225,1)' progress={item.progress} />
            </View>
          </TouchableOpacity>
        )
      }
    })
  )

    return (
      <SafeAreaView style={{flex:1,padding:24,backgroundColor:"#EAEAEA"}}>
        <StatusBar translucent backgroundColor={"transparent"}/>
        <View style={{paddingTop:40,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <View>
              <Image style={{width:60,height:60,borderRadius:50}} source={require("../../../assets/images/person.jpg")}/>
            </View>
            <View style={{marginLeft:16}}>
                <Text style={{color:"#000",fontFamily:"DMSans-Medium",fontSize:20}}>Hey, {name}</Text>
                <Text style={{color:"#A6A5A5",fontFamily:"DMSans-Regular",fontSize:14}}>let's get started</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity style={{position:"relative",flexDirection:"row"}}>
              <Notification/>
              <View style={{width:10,height:10,backgroundColor:"#DE3730",borderRadius:50,position:"absolute",right:2}}></View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{position:"relative"}}>
          <Carousel
            marginTop={24}
            layout={'stack'} 
            layoutCardOffset={4}
            ref={isCarousel}
            data={going}
            renderItem={({item,index})=>(
              <View key={index} style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:20,borderRadius:28,width:346,backgroundColor:`${item.color}`}}>
                <View>
                  <Text style={{color:"rgba(225,225,225,0.9)",fontFamily:'DMSans-Light',fontSize:13,marginBottom:16}}>ongoing</Text>
                  <Text style={{color:"#fff",fontFamily:'DMSans-Medium',fontSize:18,marginBottom:10}}>{item.title}</Text>
                  <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={{marginRight:10,color:"rgba(225,225,225,0.9)",fontFamily:'DMSans-Light',fontSize:13}}>{(item.progress)*100}%</Text>
                    <Progress.Bar width={120} borderColor="transparent" unfilledColor='rgba(225,225,225,0.5)' color='rgba(225,225,225,1)' progress={item.progress} />
                  </View>
                  <TouchableOpacity onPress={() => navigation.navigate('Learning')} style={{marginTop:14,paddingVertical:6,borderRadius:20,paddingHorizontal:16,backgroundColor:"rgba(225,225,225,0.4)",alignSelf:"baseline"}}>
                    <Text style={{color:"#fff",fontFamily:'DMSans-Regular',fontSize:14}}>Continue</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Image source={item.image} style={{width:120,height:120}}/>
                </View>
              </View>
            )}
            sliderWidth={500}
            itemWidth={500}
            inactiveSlideShift={0}
            useScrollView={true}
            onSnapToItem={(index) =>setIndex(index) }
          />
          <View style={{position:"absolute",top:164,right:0,left:0}}>
            <Pagination
              dotsLength={going.length}
              activeDotIndex={index}
              carouselRef={isCarousel}
              dotStyle={{
                width: 28,
                height: 8,
                borderRadius: 4,
                marginHorizontal: 0,
                backgroundColor: "#51459F"
              }}
              inactiveDotStyle={{
                width: 12,
                height: 12,
                borderRadius: 6,
                marginHorizontal: 0,
                backgroundColor: "#51459F"
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              tappableDots={true}
            />
          </View>
        </View>
        <View style={{marginTop:24}}>
          <Text style={{color:"#676767",fontFamily:'DMSans-Medium',fontSize:14,marginBottom:10}}>Choose Your Course</Text>
          <View style={{flexDirection:"row",alignItems:"center",flexWrap:"wrap",justifyContent:"space-around"}}>
            <Course />
          </View>
        </View>
        <View>
          <Text style={{color:"#676767",fontFamily:'DMSans-Medium',fontSize:14,marginBottom:10,marginTop:6}}>Today's Lecture</Text>
        </View>
        <ScrollView style={{marginBottom:30}} >
          <Lecture />
        </ScrollView>
      </SafeAreaView>
    )
  }
  