import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/FontAwesome'
import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'
import Splash from './screens/Splash'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const StackComponent = () => (
    <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen component={Login} name='Login' />
        <Stack.Screen component={Register} name='Register' />
    </Stack.Navigator>
)

const SwitchComponent = () => (
    <Stack.Navigator headerMode='none' initialRouteName='Auth'>
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Auth' component={StackComponent} />
    </Stack.Navigator>
)

const TabNavigator = () => (
    <Tab.Navigator initialRouteName='Feed'
    tabBarOptions={{activeTintColor: '#037ffc', inactiveTintColor: '#c4c4c4', showLabel: false}}>
        <Tab.Screen options={{ tabBarIcon: ({ color }) => <Icon name='home' color={color} size={25} />}}
        name='Feed' component={Feed} />
        <Tab.Screen options={{ tabBarIcon: ({ color }) => <Icon name='camera' color={color} size={25} />}}
        name='AddPhoto' component={AddPhoto} />
        <Tab.Screen options={{ tabBarIcon: ({ color }) => <Icon name='user' color={color} size={25} />}}
        name='Profile' component={SwitchComponent} />
    </Tab.Navigator>
)

export default () => (
    <Stack.Navigator headerMode='none' initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='App' component={TabNavigator} />
    </Stack.Navigator>
)