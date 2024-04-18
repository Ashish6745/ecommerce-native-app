import { View, Text, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { CartContext } from '../contextApi/ContextAPI'
import SmallBox from './SmallBox'
import Card from './MobileCard'
import Tabletcards from './Tabletcards'

const Cart = () => {
  const{cart} = useContext(CartContext)
 const{mobile} = useContext(CartContext)
const{tab} = useContext(CartContext)
  return (
  <ScrollView showsVerticalScrollIndicator={false}>
  <Text style={{fontSize: 24, fontWeight: 'bold', margin: 10}}>Home  Products</Text>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
  {
    cart.map((item,id) => (
      <SmallBox item={item} key={id} />
    ))
  }
</ScrollView >
<Text style={{fontSize: 24, fontWeight: 'bold', margin: 10}}>Mobile Products</Text>
<ScrollView horizontal showsHorizontalScrollIndicator={false} >
 {
  mobile.map((item,id) => (
    <Card key={id} item={item} />
  ))
 }
</ScrollView>
<Text style={{fontSize: 24, fontWeight: 'bold', margin: 10}}>Tab Products</Text>
<ScrollView horizontal showsHorizontalScrollIndicator={false} >
 {
  tab.map((item,id) => (
    <Tabletcards key={id} item={item} />
  ))
 }
</ScrollView>

  </ScrollView>
  )
}

export default Cart