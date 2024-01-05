import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  
  import React, { useState } from 'react'
  import VideoPlayer from 'react-native-video-player'
  import Completed from '../../../assets/images/compleated.svg'
  import Drop_down from '../../../assets/images/drop-down.svg'
  import Up_arrow from '../../../assets/images/up-arrow.svg'
  import Lock from '../../../assets/images/lock.svg'
  import Play from '../../../assets/images/play.svg'



  
  export default function Videos() {

    const[content,setContent]=useState([
      {
        id:1,
        title:"Introduction",
        lesson:1,
        duration:"2:05",
        video:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        thumbnail:"https://img.jagranjosh.com/imported/images/E/Articles/maths2.jpg",
        status:"completed",
        active:true,
      },
      {
        id:2,
        title:"Fundamentals of maths",
        lesson:1,
        duration:"2:05",
        video:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9lD3LYeiRNnOpgB6RUWJ-plhS-Wx33Kdfc4lHftmSFPou3JDk9w0r4bXz1eU4v1vvnbE&usqp=CAU",
        status:"ongoing",
        active:false,
      },
      {
        id:3,
        title:"Calculus",
        lesson:1,
        duration:"2:05",
        video:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbTp5BSUb9vqPSKzDNNYmOSR-w8-1Al33l-CA_KMT2bIuDniHbgF63UOeUiPIT4N0CZyg&usqp=CAU",
        status:"locked",
        active:false,
      },
      {
        id:4,
        title:"Set theory",
        lesson:1,
        duration:"2:05",
        video:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkynaCw-8nUIyb5IJglAPh2Zol6c26QoOQe2kk79kNpx12LaN98VGW3dyoNnEXQUtApt8&usqp=CAU",
        status:"locked",
        active:false,
      },
      {
        id:5,
        title:"Functions",
        lesson:1,
        duration:"2:05",
        video:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGTs4APgJpVOBPuWhz8ja-DZen7b5Z9CmeufnSlItv4jqIRGX-W1AFugYvbyFMxpHTeQ&usqp=CAU",
        status:"locked",
        active:false,
      },
      {
        id:6,
        title:"Introduction",
        lesson:2,
        duration:"2:05",
        video:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYD-Kqq6wqt-V_9DelEZNskBNlZEv6Q2kAcgIRfDWXNFFSFEdOXApOFW_pYjuxKI3bdv8&usqp=CAU",
        status:"locked",
        active:false,
      },
      {
        id:7,
        title:"Maths 1",
        lesson:2,
        duration:"2:05",
        video:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JiGm_OBjQ60hHQAfk7-auynYzOXBX4Ld3ZWsEbfuK4OovL6d-JeChmlpN5kJCe37wz4&usqp=CAU",
        status:"locked",
        active:false,
      },
      {
        id:8,
        title:"Calculus 2",
        lesson:2,
        duration:"2:05",
        video:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_KChB4Dkds0x79Bwd41XeOoSGSNbqmB6VWdsKTAWLtl1lSq6efBQrS3glPhRgeixcjQc&usqp=CAU",
        status:"locked",
        active:false,
      },
    ])

    const bg=(itm)=>{
      if(itm.active){
        return {
          flexDirection:"row",
          marginBottom:10,
          alignItems:"center",
          justifyContent:"space-between",
          paddingVertical:10,
          paddingHorizontal:16,
          backgroundColor:"#51459F",
          borderRadius:10
        }
      }
      else{
        return {
          flexDirection:"row",
          marginBottom:10,
          alignItems:"center",
          justifyContent:"space-between",
          paddingVertical:10,
          paddingHorizontal:16,
        }
      }
    }

    const text=(itm)=>{
      if(itm.active){
        return {color:"#fff",fontFamily:"DMSans-Medium",fontSize:14,marginLeft:10}
      }
      else{
        return {color:"#000",fontFamily:"DMSans-Medium",fontSize:14,marginLeft:10}
      }
    }

    const [lesson,setLesson]=useState(
      [
        {
          id:1,
          lesson:1,
          title:"Lesson 1",
          description:"Indroduction",
          active:false,
        },
        {
          id:2,
          lesson:2,
          title:"Lesson 2",
          description:"Maths",
          active:false,
        }
      ]
    )

    const [video,setVedio]=useState({
      id:1,
      title:"Introduction",
      description:"Introduction",
      video:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail:"https://img.jagranjosh.com/imported/images/E/Articles/maths2.jpg",
      status:"completed",
    })

    const drop=(item)=>(
      item.active?<Up_arrow/>:<Drop_down/>
    )

    const contenthandling=(item)=>(
      item.active?(
        content.map((itm)=>(
          (item.lesson==itm.lesson)?((itm.status=="locked")?(
            <View key={itm.id} style={bg(itm)}>
              <View style={{flexDirection:"row",alignItems:"center"}}>
                {
                  (itm.status=="completed")?<Completed/>:(itm.status=="ongoing")?<Play/>:<Lock/>
                }
                <Text style={text(itm)}>{itm.title}</Text>
              </View>
              <View>
                <Text style={text(itm)}>{itm.duration}</Text>
              </View>
            </View>
          ):(
            <TouchableOpacity key={itm.id}  onPress={()=>{
              setVedio({id:itm.id,title:item.description,description:itm.title,video:itm.video,thumbnail:itm.thumbnail,status:itm.status})
              setContent(content.map((con)=>{
                if(con.id==itm.id){
                  return {id:con.id,
                    title:con.title,
                    lesson:con.lesson,
                    duration:con.duration,
                    video:con.video,
                    thumbnail:con.thumbnail,
                    status:con.status,
                    active:true,}
                }
                else{
                  return {
                    id:con.id,
                    title:con.title,
                    lesson:con.lesson,
                    duration:con.duration,
                    video:con.video,
                    thumbnail:con.thumbnail,
                    status:con.status,
                    active:false,
                  }
                }
              }))
            }} style={bg(itm)}>
              <View style={{flexDirection:"row",alignItems:"center"}}>
                {
                  (itm.status=="completed")?<Completed/>:(itm.status=="ongoing")?<Play/>:<Lock/>
                }
                <Text style={text(itm)}>{itm.title}</Text>
              </View>
              <View>
                <Text style={text(itm)}>{itm.duration}</Text>
              </View>
            </TouchableOpacity>
          )):(<View key={itm.id}></View>)
        ))
      ):(<View></View>)
    )

    const LessonHandling=()=>(
      lesson.map((item)=>(
        <View key={item.id}>
          <TouchableOpacity onPress={()=>{
            setLesson(
              lesson.map((itm)=>(
                (itm.id==item.id)?(
                  {id:itm.id,lesson:itm.lesson,title:itm.title,description:itm.description,active:!(itm.active)}
                ): itm))
            )
          }}>
            <View key={item.id} style={{  marginBottom:14,flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:10,borderColor:"#999",borderWidth:1,borderRadius:10}}>
              <Text style={{color:"#000",fontFamily:"DMSans-Medium",fontSize:16}}>{item.title}</Text>
              <View>
                {
                  drop(item)
                }
              </View> 
            </View>
          </TouchableOpacity> 
          <View style>
            {
              contenthandling(item)
            }
          </View>
        </View>
      ))
    )

    const HandleButton=()=>(
      (video.status=="ongoing")?(
        <TouchableOpacity onPress={()=>{
          setContent(content.map((item)=>{
            if(item.id==video.id){
              return {
                id:item.id,
                title:item.title,
                lesson:item.lesson,
                duration:item.duration,
                video:item.video,
                thumbnail:item.thumbnail,
                status:"completed",
                active:item.active,
              }
            }
            else if(item.id==(video.id + 1)){
              return {
                id:item.id,
                title:item.title,
                lesson:item.lesson,
                duration:item.duration,
                video:item.video,
                thumbnail:item.thumbnail,
                status:"ongoing",
                active:item.active,
              }
            }
            else{
              return item
            }
          }))
          setVedio({id:video.id,title:video.title,description:video.description,video:video.video,thumbnail:video.thumbnail,status:"completed"})
        }} style={{flexDirection:"row",alignItems:'center',borderColor:"#51459F",borderWidth:1,padding:10,borderRadius:10}}>
          <Completed width={16} height={16}/>
          <Text style={{color:"#51459F",fontFamily:"DMSans-Medium",fontSize:14,marginLeft:10}}>Mark as Completed</Text>
        </TouchableOpacity>
      ):(<View></View>)
    )

    return (
      <SafeAreaView style={{flex:1,paddingTop:60,backgroundColor:"#EAEAEA"}}>
        <StatusBar translucent backgroundColor={"transparent"}/>
        <View style={{width:"100%"}}>
          <VideoPlayer
              video={{ uri:`${video.video}`}}
              videoWidth={1600}
              videoHeight={900}
              thumbnail={{ uri:`${video.thumbnail}`}}
              repeat={true}
              showDuration
              pauseOnPress
          />
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:20,marginTop:30}}>
          <View>
            <Text style={{color:"#000",fontFamily:"DMSans-Bold",fontSize:16}}>{video.title}</Text>
            <Text style={{color:"#999",fontFamily:"DMSans-Medium",fontSize:12}}>{video.description}</Text>
          </View>
          <View>
            <HandleButton/>
          </View>
        </View>
        <ScrollView style={{marginTop:24,paddingHorizontal:20,marginBottom:70}}>
          <LessonHandling/>
        </ScrollView>
        
      </SafeAreaView>
    )
  }
  