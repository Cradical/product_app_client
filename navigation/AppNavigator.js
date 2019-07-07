import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import MainTabNavigator from './MainTabNavigator'

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator
  })
)

export default AppContainer
