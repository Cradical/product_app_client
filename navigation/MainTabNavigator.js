import React from 'react'
import { Platform } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import ProductSreen from '../screens/ProductScreen'
import ProductDetailsScreen from '../screens/ProductDetailsScreen'

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
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'android'
          ? 'md-home'
          : `ios-home${focused ? '' : '-outline'}`
      }
    />
  )
}

HomeStack.path = ''

const ProductStack = createStackNavigator(
  {
    Product: ProductSreen,
    ProductDetails: ProductDetailsScreen
  },
  config
)

ProductStack.navigationOptions = {
  tabBarLabel: 'Products',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'android'
          ? 'md-bowtie'
          : `ios-bowtie${focuesed ? '' : '-outline'}`
      }
    />
  )
}

ProductStack.path = ''

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ProductStack
})

tabNavigator.path = ''

export default tabNavigator
