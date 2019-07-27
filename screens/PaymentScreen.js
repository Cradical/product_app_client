import React from 'react'
import { View, Text } from 'react-native'
import stripe from 'tipsi-stripe'

// stripe.setOptions({
//   publishableKey: 'pk_test_xh1t474nEADwqtTkhP4D8xnj00zCYnnJiX'
//   // androidPayMode: 'test' // Android only
// })

class PaymentScreen extends React.Component {
  // requestPayment = () => {
  //   return stripe.paymentRequestWithCardForm
  //     .then(stripeTokenInfo => {
  //       console.warn('Token created', { stripeTokenInfo })
  //     })
  //     .catch(error => {
  //       console.warn('Payment failed', { error })
  //     })
  // }

  render() {
    return (
      <View>
        <Text>Payment Screen</Text>
      </View>
    )
  }
}

export default PaymentScreen
