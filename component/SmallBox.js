import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import React, { useContext } from 'react';
import { CartContext } from '../contextApi/ContextAPI';

const SmallBox = ({item}) => {
  const {cart, setCart} = useContext(CartContext)
  return (
    <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              height: 280,
              width: 200,
              backgroundColor: '#172774',
              margin: 10,
              display: 'flex',
              alignItems: 'center',
              borderRadius:10
            }}>
            <Image
              style={{height: 200, width: 200, borderRadius:10}}
              source={{
                uri: item.img
              }}
            />

            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: 5,
                color: 'white',
              }}>
              {item.product}
            </Text>
            <TouchableOpacity
            onPress={()=>{setCart([...cart, item])}}

              style={{
                width: '90%',
                height: 40,
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text
                style={{fontSize: 18, fontWeight: 'bold', color: '#172774'}}>
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
  );
};

export default SmallBox;
