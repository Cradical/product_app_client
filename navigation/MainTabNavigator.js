import React from 'react'
import { Platform } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
})

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
)

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  TabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'android'
          ? 'md-information-circle'
          : `ios-information-circle${focused ? '' : '-outline'}`
      }
    />
  )
}

HomeStack.path = ''

const tabNavigator = createBottomTabNavigator({
  HomeStack
})

tabNavigator.path = ''

export default tabNavigator
