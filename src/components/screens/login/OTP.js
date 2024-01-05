import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
  
  import React from 'react'
  import {useState} from'react'

  import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
  
  const CELL_COUNT = 4;

  export default function OTP({ route, navigation }) {

    const method=route.params.method
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });
    const phone=route.params.phone_no
    const [error,setError]=useState('')

    const HandleClick=()=>{
      if(value && value==1234){     //Default OTP set is 1234
        navigation.navigate('Name',{method:method})
        setError('')
      }
      else{
        setError("Please enter correct OTP")
      }
    }

    return (
      <SafeAreaView style={{flex:1,alignItems:"center",paddingTop:140,backgroundColor:"#fff"}}>
        <StatusBar translucent backgroundColor={"transparent"}/>
        <View>
          <Image source={require('../../../assets/images/otp-page.jpg')} />
        </View>
        <View>
          <Text style={{color:"#000",fontSize:28,fontFamily:"DMSans-Medium",marginTop:50,textAlign:"center"}}>Verify OTP</Text>
          <Text style={{color:"#A6A5A5",fontSize:16,fontFamily:"DMSans-Light",marginTop:16,textAlign:"center",paddingHorizontal:22}}>
            Please enter the 4 digit verification code that is send to you at
          <Text style={{color:"#3935AB",fontFamily:"DMSans-Medium"}}> +91 {phone}</Text></Text>
        </View>
        <View style={{width:"100%",paddingHorizontal:24}}>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
        <View style={{marginTop:16,flexDirection:"row",alignItems:"center",alignSelf:"flex-end",paddingRight:24}}>
          <Text style={{color:"#000",fontFamily:"DMSans-Medium",fontSize:14}}>Don't receive code?</Text>
          <TouchableOpacity ><Text style={{color:"#3935AB",fontFamily:"DMSans-Medium",fontSize:14,marginLeft:4}}>Resend</Text></TouchableOpacity>
        </View>
        <View>
          {
            error?(<Text style={{color:"#DE3730",fontSize:16,textAlign:"center",fontFamily:"DMSans-Medium",marginTop:20}}>{error}</Text>):(<View></View>)
          }
        </View>
        <View style={{width:"100%",paddingHorizontal:24,marginTop:30}}>
          <TouchableOpacity onPress={HandleClick} style={{backgroundColor:"#7974B3",padding:16,borderRadius:10}}>
            <Text style={{textAlign:"center",color:"#fff",fontFamily:"DMSans-Medium",fontSize:16}}>Verify</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }


  const styles = StyleSheet.create({
    codeFieldRoot: {marginTop: 30},
    cell: {
      width: 66,
      height: 66,
      lineHeight: 62,
      fontSize: 24,
      borderWidth: 2,
      borderColor: '#00000030',
      textAlign: 'center',
      borderRadius:10,
      color: '#000000',
      fontFamily:"Quantico-Regular"
    },
    focusCell: {
      borderColor: '#000',
    },
  });
  
  