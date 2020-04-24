import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'
import Header from './src/components/Header'
import Post from './src/components/Post'

const App = () => {

  const comments = [{
    nickname: 'Cleiton Souza',
    comment: 'Excelente Foto!'
  }, {
    nickname: 'Joao Noia',
    comment: 'Massa'
  }]

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Header />
        <Post comments={comments} image={require('./assets/imgs/fence.jpg')} />
      </View>
    </NavigationContainer>
  )
}

export default App