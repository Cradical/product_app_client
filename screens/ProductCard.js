import React from 'react'
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const ProductCard = props => {
  console.log(props)
  if (!props) return null

  return props.products.map(product => {
    return (
      <View key={product.id}>
        <Card title={product.name}>
          <Image source={product.img_url} />
          <Text>{product.category.name}</Text>
          <Text>{product.description}</Text>
          <Button title='buy now' />
        </Card>
      </View>
    )
  })
}

export default ProductCard
