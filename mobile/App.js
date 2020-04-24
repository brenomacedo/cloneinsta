import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'
import Nav from './src/Navigator'


const App = () => {
  return (
    <NavigationContainer>
      <Nav />
    </NavigationContainer>
  )
}

export default App