import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { MonoText } from '../components/StyledText'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View>
          <Text>Welcome To The App</Text>
          <MonoText>This is the beginning of the future</MonoText>
          <Image
            source={
              __DEV__ ? (
                require('../assets/images/robot-dev.png')
              ) : (
                <Ionicons name='rocket' />
              )
            }
          />
        </View>
      </ScrollView>
    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
