import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/FontAwesome'
import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'

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

export default () => (
    <Tab.Navigator initialRouteName='Home'
    tabBarOptions={{activeTintColor: '#037ffc', inactiveTintColor: '#c4c4c4', showLabel: false}}>
        <Tab.Screen options={{ tabBarIcon: ({ color }) => <Icon name='user' color={color} size={25} />}}
        name='Home' component={Feed} />
        <Tab.Screen options={{ tabBarIcon: ({ color }) => <Icon name='camera' color={color} size={25} />}}
        name='AddPhoto' component={AddPhoto} />
        <Tab.Screen options={{ tabBarIcon: ({ color }) => <Icon name='user' color={color} size={25} />}}
        name='Profile' component={SwitchComponent} />
    </Tab.Navigator>
)