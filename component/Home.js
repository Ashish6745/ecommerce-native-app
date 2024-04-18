import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, { useContext } from 'react';
import {useNavigation} from '@react-navigation/native';
import Grid from './Grid';
import SmallBox from './SmallBox';
import { CartContext } from '../contextApi/ContextAPI';

const Home = () => {
  const data = [
    {
      type: 'Grocery',
      url: 'https://rukminim2.flixcart.com/flap/112/112/image/29327f40e9c4d26b.png?q=100',
    },
    {
      type: 'Mobiles',
      url: 'https://rukminim2.flixcart.com/flap/112/112/image/22fddf3c7da4c4f4.png?q=100',
    },
    {
      type: 'Fashion',
      url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQJmYnID99m3Otb8YWuoXP47wb90zYzLUjUCFqK99ACjoek_YeR',
    },
    {
      type: 'Electronics',
      url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSUISCsSCXqv_O_-n5VTxLLAMQE8Urp7LP_Ju3iF-NvKUBBdGWj',
    },
    {
      type: 'Furniture',
      url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQphwFrTwQJra3Hr5-ZamzaNXPrqG-nPHy_uFHV7YZeyxKD6JOe',
    },
  ];
  const fakeData = [
    {
      img: 'https://images.pexels.com/photos/4263072/pexels-photo-4263072.jpeg?auto=compress&cs=tinysrgb&w=400',
      product: 'Remote Control Toys',
    },
    {
      img: 'https://images.pexels.com/photos/12893643/pexels-photo-12893643.jpeg?auto=compress&cs=tinysrgb&w=400',
      product: 'Smart Band',
    },
    {
      img: 'https://images.pexels.com/photos/1198264/pexels-photo-1198264.jpeg?auto=compress&cs=tinysrgb&w=400',
      product: 'Clocks',
    },
    {
      img: 'https://images.pexels.com/photos/4065748/pexels-photo-4065748.jpeg?auto=compress&cs=tinysrgb&w=400',
      product: 'keyboards',
    },
    {
      img: 'https://images.pexels.com/photos/19189181/pexels-photo-19189181/free-photo-of-man-in-a-baseball-cap-in-a-clearing.jpeg?auto=compress&cs=tinysrgb&w=400',
      product: 'Mens T-shirts',
    },
    {
      img: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400',
      product: 'HeadPhones',
    },
    {
      img: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400',
      product: 'Mobile',
    },
    {
      img: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400',
      product: 'Programming Laptops',
    },
    {
      img: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=400',
      product: 'Macbook',
    },
    {
      img: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
      product: 'Iphone X',
    },
    {
      img: 'https://images.pexels.com/photos/11420185/pexels-photo-11420185.jpeg?auto=compress&cs=tinysrgb&w=400',
      product: 'Samsung S9',
    },
  ];

  

  const navigation = useNavigation();
  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{margin: 10, flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Mobiles');
          }}
          style={{
            width: 150,
            height: 40,
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
            borderWidth: 1,
            borderColor: 'black',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Mobiles</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Computers');
          }}
          style={{
            width: 150,
            height: 40,
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
            borderWidth: 1,
            borderColor: 'black',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Computers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Tablets');
          }}
          style={{
            width: 150,
            height: 40,
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
            borderWidth: 1,
            borderColor: 'black',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Tablets</Text>
        </TouchableOpacity>
      </ScrollView>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item, id}) => <Grid item={item} key={id} />}
      />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {fakeData.map((item, index) => (
          <SmallBox item={item} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
