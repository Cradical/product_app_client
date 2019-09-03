import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { PaymentsStripe as Stripe } from 'expo-payments-stripe'
import Axios from 'axios'

export default class ProductDetailsScreen extends React.Component {
  componentWillMount() {
    Stripe.setOptionsAsync({
      publishableKey: 'pk_test_xh1t474nEADwqtTkhP4D8xnj00zCYnnJiX',
      androidPayMode: 'test', // Android only
    })
  }

  async processPayment(price, tokenId) {
    console.log('price: ', price)
    console.log('tokenId: ', tokenId)
    const body = {
      amount: price,
      tokenId,
    }

    const headers = {
      'Content-type': 'application/json',
    }

    console.log('before post request')
    console.log('body_param: ', body)
    console.log('headers: ', headers)

    try {
      const { data } = await Axios.post(
        'http://10.0.0.13:4000/api/checkout',
        body,
        { headers }
      )
      console.log('after post request')
      console.log('data: ', data)
      return data
    } catch (error) {
      console.log('error: ', error)
      return Promise.reject('Error making payment', error)
    }
  }

  handlePaymentRequest = () => {
    const product = this.props.navigation.state.params
    return Stripe.paymentRequestWithCardFormAsync()
      .then(stripeTokenInfo => {
        console.log('Token created: ', { stripeTokenInfo })
        console.log(
          'run processPayment() with ',
          product.price,
          stripeTokenInfo.tokenId
        )
        return this.processPayment(product.price, stripeTokenInfo.tokenId)
      })
      .then(console.log('Payment request skipped'))
      .catch(error => {
        console.warn('Payment failed: ', { error })
      })
  }

  render() {
    const product = this.props.navigation.state.params
    console.log('product: ', product)
    return (
      <View key={product.id}>
        <Card title={product.name}>
          <Image style={styles.imageStyle} source={{ uri: product.img_url }} />
          <Text style={styles.categoryTitle}>{product.category.name}</Text>
          <Text>{product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Button
            style={styles.buttonStyle}
            title='buy now'
            onPress={this.handlePaymentRequest}
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
