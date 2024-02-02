import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavourites from "../components/NavFavourites";

/*

INCASE YOU WANT MULTIPLE STYLING YOU CAN GIVE LIKE THIS

<Text style={[tw`text-blue-500 p-10`, {backgroundColor:'grey'},
        styles.text,{borderColor:'black'}
    ]} >HomeScreen is here</Text>
*/

const HomeScreen = () => {
  const dispatch=useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
          }}
        />
        <GooglePlacesAutocomplete
          styles={{
            container: { flex: 0 },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location:details.geometry.location,
              description:data.description
            }))
            //console.log(data);
            //console.log(details);

            dispatch(setDestination(null))
          }}
          fetchDetails={true} //gets the geocoordinate details
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: 'AIzaSyA6gG7wJxAw9oL4sSotlgUOUppuMsmJP4c',
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400} //aftet 400ms of typing stop, req is made
          placeholder="Where From?"
        />

        <NavOptions />
        <NavFavourites/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
  },
});
