import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import {Icon} from 'react-native-elements';
import tw from "tailwind-react-native-classnames";
const NavFavourites = () => {
    const data=[
        {
            id:"123",
            icon:"home",
            location:"Home",
            destination:"Vasudha greens, kamalgazi, Kamalgazi, Kamalgachhi More, Kolkata, West Bengal, India"
        },
        {
            id:"456",
            icon:"briefcase",
            location:"Work",
            destination:"Vasudha greens, kamalgazi, Kamalgazi, Kamalgachhi More, Kolkata, West Bengal, India",
        }
    ]
  return (
    <FlatList
    ItemSeparatorComponent={()=>(
        <View style={tw`bg-gray-200 h-1`}/>
        )}
    data={data} keyExtractor={(item)=>item.id}
    renderItem={({item:{location, destination, icon}})=>(
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
           <Icon
           style={tw`mr-4 rounded-full bg-gray-300 p-3`}
           name={icon}
           color="white"
           type="ionicon"
           size={18}

           />

           <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
           </View>
        </TouchableOpacity>
    )}
    />
  )
}

export default NavFavourites

const styles = StyleSheet.create({})