import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

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
            icon:"breifcase",
            location:"Work",
            destination:"Vasudha greens, kamalgazi, Kamalgazi, Kamalgachhi More, Kolkata, West Bengal, India",
        }
    ]
  return (
    <FlatList
    data={data} keyExtractor={(item)=>item.id}
    renderItem={({item})=>(
        <TouchableOpacity>
            <Text>YO</Text>
        </TouchableOpacity>
    )}
    />
  )
}

export default NavFavourites

const styles = StyleSheet.create({})