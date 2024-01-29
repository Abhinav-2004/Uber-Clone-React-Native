import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
GooglePlacesAutocomplete;
import { API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
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
