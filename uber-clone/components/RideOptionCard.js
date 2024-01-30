import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";

const RideOptionCard = () => {
  const navigation = useNavigation();
  const data=[{
    id:"Uber-Go-123",
    title:"Uber Go",
    multiplier:1,
    image:"https://links.papareact.com/3pn"
  },
  
  {
    id:"Uber-Go-456",
    title:"Uber Go Sedan",
    multiplier:1.5,
    image:"https://links.papareact.com/7pf"
  },
  {
    id:"Uber-XL-789",
    title:"Uber XL",
    multiplier:1.75,
    image:"https://links.papareact.com/5w8"
  },
  
]
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 p-3 rounded-full z-50`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center font-semibold py-5 text-xl`}>
          Select a Ride{" "}
        </Text>
      </View>
      <FlatList
      data={data}
      keyExtractor={item=>item.id}
      renderItem={({item:{id, title, multiplier, image}, item})=>(
        <TouchableOpacity>
          <Image
          style={{width:100, height:100, resizeMode:'contain'}}
          source={{uri:image}}
          />
        </TouchableOpacity>
      )}
      />
    </SafeAreaView>
  );
};

export default RideOptionCard;

const styles = StyleSheet.create({});
