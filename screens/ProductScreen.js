import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import global from '../constants/GlobalStyles'
import ProductCard from './ProductCard'

export default class ProductScreen extends React.Component {
  state = {
    products: []
  }

  async componentDidMount() {
    console.log('component did mount')
    const baseURL = 'http://192.168.250.244:4000'
    try {
      let response = await fetch(`${baseURL}/api/products`)
      let data = await response.json()
      this.setState({ products: data.products })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <View style={global.container}>
        <ScrollView>
          <Text>Product Screen</Text>
          <ProductCard products={this.state.products} />
        </ScrollView>
      </View>
    )
  }
}

ProductScreen.navigationOptions = {
  header: null
}
