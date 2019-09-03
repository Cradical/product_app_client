import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text>Welcome To Dida</Text>
          <Text style={styles.title}>Ecom App</Text>
          <Text style={styles.subtitle}>The Place to Buy Cool Things</Text>
          <Image
            style={styles.imageStyle}
            source={require('../assets/images/Baby_kid_babies_tshirt_tee_clothes_girl-512.png')}
          />
          <Text>When you need it.</Text>
          <Text>Always on the go.</Text>
        </View>
      </ScrollView>
    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageStyle: {
    height: 175,
    width: 175,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeMessage: {
    flexWrap: 'wrap',
    margin: 'auto',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'serif',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'serif',
    textAlign: 'center',
    marginBottom: 5,
  },
})
