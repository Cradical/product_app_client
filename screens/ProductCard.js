import React from 'react'
import { View, StyleSheet, TouchableHighlight, Alert } from 'react-native'
import { PricingCard } from 'react-native-elements'
import '@expo/vector-icons'

class ProductCard extends React.Component {
  constructor(props) {
    super(props)
  }

  handlePressEvent = product => {
    const { navigate } = this.props
    console.log('card pressed')
    navigate.navigate('ProductDetails', product)
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
              price={product.price}
              info={[
                product.category.name,
                'Click for more details',
                'styling'
              ]}
              button={{ title: 'BUY NOW' }}
              onButtonPress={() =>
                Alert.alert(
                  'Purchase Complete!',
                  'Great! You just bought the product! It is being delivered!'
                )
              }
            />
          </TouchableHighlight>
        </View>
      )
    })
  }
}

export default ProductCard

const styles = StyleSheet.create({
  button: {
    marginTop: 10
  },
  description: {
    paddingBottom: 10
  }
})
