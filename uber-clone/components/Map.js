import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useDispatch, useSelector } from "react-redux";
import { selectDestination, selectOrigin, setTravelTimeInformation } from "../slices/navSlice";
import { FontAwesome5 } from "@expo/vector-icons";
import MapViewDirections from "react-native-maps-directions";
import { API_KEY } from "@env";


const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  //console.log(useSelector(selectOrigin));
  const mapRef = useRef(null);
  const dispatch=useDispatch();
  useEffect(() => {
    if (!origin && !destination) return;

    //Zoom and fit to both markers
    function mapShift() {
      mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: { top: 150, right: 150, bottom: 150, left: 150 },
      });
    }
    //mapShift();
    setTimeout(() => {
      mapShift();
    }, 1500);
  }, [origin, destination]);

  useEffect(() => {
    const getTravelTime = async () => {
      if (!origin || !destination) return;
      
    };
    getTravelTime();
  }, [origin, destination, API_KEY]);

  return (
    <View>
      <MapView
        ref={mapRef}
        mapType="mutedStandard"
        initialRegion={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={styles.map}
      >
        {origin && destination && (
          <MapViewDirections
            origin={origin.description}
            destination={destination.description}
            apikey={API_KEY}
            strokeColor="black"
            strokeWidth={3}
            onReady={(result)=>{
              //console.log(result.distance.toFixed(2))
               //console.log(result.duration.toFixed(2))
              dispatch(setTravelTimeInformation({
                distance:result.distance.toFixed(2),
                time:result.duration.toFixed(2),
              }))
            }}//return hell lot of informations
          />
        )}
        {origin?.location && (
          <Marker
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
            title="Origin"
            description={origin.description}
            identifier="origin" // will be used in mapRef
          >
            <FontAwesome5 name="house-user" size={24} color="black" />
          </Marker>
        )}
        {destination?.location && (
          <Marker
            coordinate={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }}
            title="Drop"
            description={destination.description}
            identifier="destination" // will be used in mapRef
          >
            <FontAwesome5 name="warehouse" size={24} color="black" />
          </Marker>
        )}
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
