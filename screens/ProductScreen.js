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

    try {
      const baseURL = 'http://192.168.250.244:4000'
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
          <ProductCard
            products={this.state.products}
            navigate={this.props.navigation}
          />
        </ScrollView>
      </View>
    )
  }
}

ProductScreen.navigationOptions = {
  title: 'Products'
}
