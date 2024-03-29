import React from 'react'
import { Alert, Text, View, Image, StyleSheet } from 'react-native'
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
    const body = {
      amount: price,
      tokenId,
    }

    const headers = {
      'Content-type': 'application/json',
    }

    try {
      const { data } = await Axios.post(
        'http://10.0.0.13:4000/api/checkout',
        body,
        { headers }
      )

      Alert.alert('Success!', 'Your Payment Went Through', [
        {
          text: 'OK',
          onPress: () => console.log('Alert Accepted'),
        },
      ])

      return data
    } catch (error) {
      Alert.alert(
        'Payment Error',
        'Something went wrong while processing your payment',
        [
          {
            text: 'OK',
            onPress: () => console.log('Alter Accepted'),
          },
        ]
      )
      console.warn('error: ', error)
      return Promise.reject('Error making payment', error)
    }
  }

  handlePaymentRequest = () => {
    const product = this.props.navigation.state.params
    return Stripe.paymentRequestWithCardFormAsync()
      .then(stripeTokenInfo => {
        return this.processPayment(product.price, stripeTokenInfo.tokenId)
      })
      .catch(error => {
        console.warn('Payment failed: ', { error })
      })
  }

  convertToDollarAmount(amount) {
    return `$${amount / 100}.00`
  }

  render() {
    const product = this.props.navigation.state.params
    return (
      <View key={product.id}>
        <Card title={product.name}>
          <Image style={styles.imageStyle} source={{ uri: product.img_url }} />
          <Text style={styles.categoryTitle}>{product.category.name}</Text>
          <Text>{this.convertToDollarAmount(product.price)}</Text>
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
