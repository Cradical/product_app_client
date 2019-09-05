import React from 'react'
import { PaymentsStripe as Stripe } from 'expo-payments-stripe'
import { View, StyleSheet, TouchableHighlight } from 'react-native'
import { PricingCard } from 'react-native-elements'
import '@expo/vector-icons'

import PaymentScreen from './PaymentScreen'

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    Stripe.setOptionsAsync({
      publishableKey: 'pk_test_xh1t474nEADwqtTkhP4D8xnj00zCYnnJiX',
      androidPayMode: 'test', // Android only
    })
  }

  handlePressEvent = product => {
    const { navigate } = this.props
    navigate.navigate('ProductDetails', product)
  }

  convertToDollarAmount(amount) {
    return `$${amount / 100}.00`
  }

  render() {
    if (!this.props) return null

    const { products } = this.props

    return products.map(product => {
      return (
        <View key={product.id}>
          <TouchableHighlight
            onPress={() => this.handlePressEvent(product)}
            activeOpacity={0.3}
            underlayColor='red'
          >
            <PricingCard
              color='#4f9deb'
              title={product.name}
              price={this.convertToDollarAmount(product.price)}
              info={[
                product.category.name,
                'Click for more details',
                'styling',
              ]}
              button={{ title: 'Product Details' }}
              onButtonPress={() => this.handlePressEvent(product)}
            />
          </TouchableHighlight>
        </View>
      )
    })
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
  description: {
    paddingBottom: 10,
  },
})

PaymentScreen.navigationOptions = {
  title: 'Payment',
}
