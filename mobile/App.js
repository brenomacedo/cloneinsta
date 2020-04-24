import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'
import Header from './src/components/Header'
import Post from './src/components/Post'

const App = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')} />
      </View>
    </NavigationContainer>
  )
}

export default App