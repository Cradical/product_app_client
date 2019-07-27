import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import { MonoText } from '../components/StyledText'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text>Welcome To Dida</Text>
          <MonoText>This is the beginning the future of ecommerce</MonoText>
          <Image source={require('../assets/images/robot-dev.png')} />
          <Text>Finally an app where you can buy the things you want.</Text>
          <Text>Always on the go.</Text>
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
  imageStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  welcomeMessage: {
    flexWrap: 'wrap',
    margin: 'auto'
  }
})
