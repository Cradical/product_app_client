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
          <Text>{product.category.name}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Button
            style={styles.button}
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
  imageStyle: {
    height: 250,
    width: 250,
    margin: 'auto'
  }
})
