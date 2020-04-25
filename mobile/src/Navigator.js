import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'

const Tab = createBottomTabNavigator()

export default () => (
    <Tab.Navigator initialRouteName='Home'
    tabBarOptions={{activeTintColor: '#037ffc', inactiveTintColor: '#c4c4c4', showLabel: false}}>
        <Tab.Screen options={{ tabBarIcon: ({ color }) => <Icon name='user' color={color} size={25} />}}
        name='Home' component={Feed} />
        <Tab.Screen options={{ tabBarIcon: ({ color }) => <Icon name='camera' color={color} size={25} />}}
        name='AddPhoto' component={AddPhoto} />
    </Tab.Navigator>
)