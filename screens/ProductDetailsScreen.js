import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { PaymentsStripe as Stripe } from 'expo-payments-stripe'

export default class ProductDetailsScreen extends React.Component {
  componentWillMount() {
    Stripe.setOptionsAsync({
      publishableKey: 'pk_test_xh1t474nEADwqtTkhP4D8xnj00zCYnnJiX',
      androidPayMode: 'test', // Android only
    })
  }

  onSuccess = async token => {
    const product = this.props.navigation.state.params

    const response = await fetch('http://10.0.0.13:4000/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: { token: token.tokenId },
    })
  }

  handleBuyNow = async () => {
    try {
      const token = await Stripe.paymentRequestWithCardFormAsync((options = {}))

      this.onSuccess(token)
    } catch (error) {
      console.warn('STRIPE ERROR: ', error)
    }
  }

  render() {
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
            onPress={this.handleBuyNow}
          />
        </Card>
      </View>
    )
  }
}

ProductDetailsScreen.navigationOptions = {
  title: 'Product Details',
}

const styles = StyleSheet.create({
  buttonStyle: {
    color: 'red',
    margin: 10,
    backgroundColor: 'red',
  },
  imageStyle: {
    height: 250,
    width: 250,
    margin: 'auto',
  },
  categoryTitle: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    paddingBottom: 10,
    fontSize: 15,
  },
  descriptionStyle: {
    paddingBottom: 10,
  },
})
