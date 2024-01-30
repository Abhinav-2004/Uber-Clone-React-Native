import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import NavigateCard from '../components/NavigateCard'
import RideOptionCard from '../components/RideOptionCard'
tw
const MapScreen = () => {
  const Stack=createStackNavigator();

  return (
    <SafeAreaView>
      <View style={tw`h-1/2`}>
        <Map/>
      </View>

      <View style={tw`h-1/2`}>
          <Stack.Navigator> 
            <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown:false,
            }}
            />
             <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionCard}
            options={{
              headerShown:false,
            }}
            />
          </Stack.Navigator>
      </View>
    </SafeAreaView>
    
  )
}

export default MapScreen