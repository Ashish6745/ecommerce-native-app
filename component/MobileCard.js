import { View, Text, Button,Image, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { CartContext } from '../contextApi/ContextAPI'

const Card = ({item,}) => {
  const {mobile, setMobile} = useContext(CartContext)
 // 
  const addProducts = () => {
    setMobile([...mobile, item])
    //setTab([...tab, item])
  }
  return (
   <ScrollView>
   <View
   style={{
   
     height: 200,
     borderWidth: 1,
     borderColor: 'black',
     margin: 10,
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'flex-start',
     flexDirection: 'row',
   }}>
   <View
     style={{
       width: '40%',
       height: 180,
       borderWidth: 1,
       borderColor: 'black',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       padding: 10,
       marginHorizontal: 10,
     }}>
     <Image
       style={{width: 140, height: 170}}
       source={{
         uri: item.img
       }}
     />
   </View>
   <View
     style={{
       height: 180,
       width: '50%',
       padding: 5,
       justifyContent: 'space-between',
     }}>
     <View>
       <Text style={{fontSize: 20, fontWeight: 'bold',color:'#172774'}}>
        {item.name}
       </Text>
       <Text style={{fontSize: 15, fontWeight: 'bold'}}>{item.price}</Text>
       <Text style={{fontSize: 14, fontWeight: '800'}}>{item.rating}</Text>
     </View>
     <Button
     onPress={()=>{addProducts()}}
     color='#172774'
     title="Add to Cart"></Button>
   </View>
 </View>
 
   </ScrollView>
  )
}

export default Card