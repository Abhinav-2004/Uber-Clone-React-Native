import { SafeAreaView, StyleSheet, Text, View , Key} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
GooglePlacesAutocomplete;
import { API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
const NavigateCard = () => {
    const dispatch=useDispatch();
    const navigation=useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>
        Good Morning, Abhinav
      </Text>
      <View style={tw`border-t border-gray-200 flex-shrink `}>
        <View>
          <GooglePlacesAutocomplete
            query={{
                key:API_KEY,
                language:'en',
            }}
            placeholder="Where to?"
            debounce={400}
            styles={toInputBoxStyles}
            nearbyPlacesAPI="GooglePlacesSearch"
            enablePoweredByContainer={false}
            minLength={2}
            fetchDetails={true}
            returnKeyType={"search"}
            onPress={(data,details=null)=>{
                dispatch(setDestination({
                    location:details.geometry.location,
                     description:data.description
                }))
                navigation.navigate('RideOptionsCard')
            }}
          />
        </View>

        <NavFavourites/>
        <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
          <TouchableOpacity 
          onPress={()=>navigation.navigate('RideOptionsCard')}
          style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
            <Icon name="car" type="font-awesome" color="white" size={16}/>
            <Text style={tw`text-white text-center`}>Rides</Text>
          </TouchableOpacity>

          <TouchableOpacity style={tw`flex flex-row justify-between bg-white w-24 px-4 py-3 rounded-full`}>
            <Icon name="car" type="font-awesome" color="black" size={16}/>
            <Text style={tw`text-black text-center`}>Eats</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#dddddf",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
