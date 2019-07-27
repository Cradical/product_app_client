import React from 'react'
import { Text, View, Image, StyleSheet, Alert } from 'react-native'
import { Card, Button } from 'react-native-elements'

export default class ProductDetailsScreen extends React.Component {
  render() {
    console.log('navigated to Product details')
    console.log('props: ', this.props.navigation.state.params)

    const product = this.props.navigation.state.params
    return (
      <View key={product.id}>
        <Card title={product.name}>
          <Image style={styles.imageStyle} source={{ uri: product.img_url }} />
          <Text style={styles.categoryTitle}>{product.category.name}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Button
            style={styles.buttonStyle}
            title='buy now'
            onPress={() =>
              Alert.alert(
                'Purchase Complete!',
                'Great! You just bought the product! It is being delivered!'
              )
            }
          />
        </Card>
      </View>
    )
  }
}

ProductDetailsScreen.navigationOptions = {
  title: 'Product Details'
}

const styles = StyleSheet.create({
  buttonStyle: {
    color: 'red',
    margin: 10,
    backgroundColor: 'red'
  },
  imageStyle: {
    height: 250,
    width: 250,
    margin: 'auto'
  },
  categoryTitle: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    paddingBottom: 10,
    fontSize: 15
  },
  descriptionStyle: {
    paddingBottom: 10
  }
})
