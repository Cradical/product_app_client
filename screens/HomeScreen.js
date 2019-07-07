import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import { MonoText } from '../components/StyledText'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text>Welcome To The App</Text>
          <MonoText>This is the beginning the future</MonoText>
          <Image source={require('../assets/images/robot-dev.png')} />
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
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  }
})
