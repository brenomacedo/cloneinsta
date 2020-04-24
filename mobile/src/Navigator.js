import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from './screens/Feed'

const Tab = createBottomTabNavigator()

export default () => (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Feed} />
    </Tab.Navigator>
)