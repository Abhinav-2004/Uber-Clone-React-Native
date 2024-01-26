import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'

const EatsScreen = () => {
  return (
    <SafeAreaView>
      <Text style={[tw`text-2xl font-bold m-36 text-center`]}>Coming Soon</Text>
    </SafeAreaView>
  )
}

export default EatsScreen