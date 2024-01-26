import {StyleSheet, View, Text, SafeAreaView,Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

/*

INCASE YOU WANT MULTIPLE STYLING YOU CAN GIVE LIKE THIS

<Text style={[tw`text-blue-500 p-10`, {backgroundColor:'grey'},
        styles.text,{borderColor:'black'}
    ]} >HomeScreen is here</Text>
*/

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image 
         style={{
            width:100, height:100, resizeMode:'contain'
         }}
         source={{
            uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png'
         }}
        />
        <NavOptions/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles=StyleSheet.create({
    text:{
        fontWeight:'bold',
    }
})