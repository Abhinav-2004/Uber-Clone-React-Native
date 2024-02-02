import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { selecttravelTimeInformation } from "../slices/navSlice";

const RideOptionCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation=useSelector(selecttravelTimeInformation);
  const data = [
    {
      id: "Uber-Go-123",
      title: "Uber Go",
      multiplier: 1,
      image: "https://links.papareact.com/3pn",
    },

    {
      id: "Uber-Go-456",
      title: "Sedan",
      multiplier: 1.5,
      image: "https://links.papareact.com/7pf",
    },
    {
      id: "Uber-XL-789",
      title: "Uber XL",
      multiplier: 1.75,
      image: "https://links.papareact.com/5w8",
    },
  ];
  //console.log(selected)
  return (
    <SafeAreaView style={tw`bg-white flex-grow h-1/2`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 p-3 rounded-full z-50`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center font-semibold py-5 text-xl ml-5`}>
          Select a Ride - {travelTimeInformation?.distance} km
        </Text>
      </View>
      <FlatList

        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between pl-2 pr-8  ${
              id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={{ uri: image }}
            />
            <View style={{ marginLeft: -10 }}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.time}mins</Text>
            </View>
            <Text style={tw`text-xl font-semibold`}>₹ {(travelTimeInformation?.distance * multiplier * 30).toFixed(0)}.00</Text>
          </TouchableOpacity>
        )}
      />

      <View>
        <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
          <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title} </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionCard;

const styles = StyleSheet.create({});
