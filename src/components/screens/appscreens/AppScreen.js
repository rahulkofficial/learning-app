import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
  
  import React,{useState} from 'react'
  
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import Home from "./Home";
  import Learning from "./Learning";
  import Profile from "./Profile";
  import Videos from './Videos';

import Homeb from '../../../assets/images/Home b.svg'
import Homeg from '../../../assets/images/Home g.svg'
import Learnb from '../../../assets/images/class-dark.svg'
import Learng from '../../../assets/images/class-light.svg'
import Profileb from '../../../assets/images/profileb.svg'
import Profileg from '../../../assets/images/profileg.svg'

const LearnStack = createNativeStackNavigator();

  
  export default function AppScreen({route}) {
    const [going,setGoing]=useState([
      {
        id:1,
        title:"3D Art & Illustration",
        image:require("../../../assets/images/3d-art-illution.jpg"),
        time:18,
        color:"#51459F",
        progress:0.5,
      },
      {
        id:2,
        title:"UI/UX Design",
        image:require("../../../assets/images/3d-art-illution.jpg"),
        time:14,
        color:"#84E9F4",
        progress:0.5,
      },
      {
        id:3,
        title:"Derivation",
        image:require("../../../assets/images/maths.jpg"),
        time:18,
        color:"#3935AB",
        progress:0.3,
      },
      {
        id:4,
        title:"Photoshop",
        image:require("../../../assets/images/photoshop.jpg"),
        time:16,
        color:"#DE3730",
        progress:0.9,
      },
      {
        id:5,
        title:"Business",
        image:require("../../../assets/images/bussiness.jpg"),
        time:10,
        color:"#676767",
        progress:0.8,
      },
    ])

    const [lecture,setLecture]=useState(
      [
        {
          id:1,
          title:"Maths",
          image:require("../../../assets/images/maths.jpg"),
          progress:0.3,
        },
        {
          id:2,
          title:"UIUX",
          image:require("../../../assets/images/ui-ux.jpg"),
          progress:0.5,
        },
        {
          id:3,
          title:"3D Art",
          image:require("../../../assets/images/3d-art-illution.jpg"),
          progress:0.4,
        },
        {
          id:4,
          title:"History",
          image:require("../../../assets/images/maths.jpg"),
          progress:1,
        },
        {
          id:5,
          title:"Python",
          image:require("../../../assets/images/derivation.jpg"),
          status:"Running...",
          progress:0.5,
        },
        {
          id:6,
          title:"Biology",
          image:require("../../../assets/images/maths.jpg"),
          progress:1,
        },
        {
          id:7,
          title:"Editing",
          image:require("../../../assets/images/photoshop.jpg"),
          progress:1,
        }
      ]
    )
    function LearnStackScreen() {
      return (
        <LearnStack.Navigator screenOptions={{
          headerShown:false,
        }}>
          <LearnStack.Screen name="LearningScreen" initialParams={{lect:lecture}} component={Learning} />
          <LearnStack.Screen name="Videos" component={Videos} />
        </LearnStack.Navigator>
      );
    }
    const Tab = createBottomTabNavigator();
    let name=route.params.param
    return (
      <NavigationContainer independent>
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              if (route.name === 'Home') {
                if(focused){
                  return <Homeb />
                }
                else{
                  return <Homeg />
                }
              } else if (route.name === 'Learning') {
                if(focused){
                  return <Learnb />
                }
                else{
                  return <Learng />
                }
              }
              else{
                if(focused){
                  return <Profileb />
                }
                else{
                  return <Profileg />
                }
              }
            },
            tabBarShowLabel:false,
            headerShown:false,
            tabBarStyle:{backgroundColor:"#fff",
            position:"absolute",
            borderTopWidth:0,
            borderRadius:60,
            shadowColor:'#000',
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity:0.58,
            shadowRadius: 16.0,
            elevation: 24, 
          },
          })}
        >
          <Tab.Screen name="Home" component={Home} initialParams={{param:name,lect:lecture,ongoing:going}} />
          <Tab.Screen name="Learning" component={LearnStackScreen} />
          <Tab.Screen name="Profile" component={Profile} initialParams={{param:name,ongoing:going}} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
  