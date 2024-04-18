import {View, FlatList, Text} from 'react-native';
import React, { useContext } from 'react';
import Card from './MobileCard';
import { CartContext } from '../contextApi/ContextAPI';

const Mobiles = () => {
  const data = [
    {
      name: 'RealMe C51',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/i/x/-original-imagt4qptrkzwmxa.jpeg?q=70',
      price: 'Rs 7,990',
      rating: '4.6',
      discount: '27% Off',
    },
    {
      name: 'RealMe C53',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/h/d/-original-imags487gaqqhcea.jpeg?q=70',
      price: 'Rs 9,499',
      rating: '4.2',
      discount: '17% Off',
    },
    {
      name: 'RealMe 12',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/w/x/-original-imagyzwyyzavhgfe.jpeg?q=70',
      price: 'Rs 19,999',
      rating: '4.2',
      discount: '16% Off',
    },
    {
      name: 'RealMe C55',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/d/b/-original-imagp9s9wfzp8ghf.jpeg?q=70',
      price: 'Rs 8,999',
      rating: '4.3',
      discount: '35% Off',
    },
    {
      name: 'RealMe 12 5G',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/e/h/12x-5g-rmx3998-realme-original-imagzjx75vd6uygj.jpeg?q=70',
      price: 'Rs 13,499',
      rating: '4.4',
      discount: '25% Off',
    },
    {
      name: 'Poco C51',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/v/b/-original-imagt4td4q9u7kxx.jpeg?q=70',
      price: 'Rs 4,499',
      rating: '4.0',
      discount: '15% Off',
    },
    {
      name: 'Poco M6 Pro',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/9/i/m6-pro-5g-mzb0eqjin-poco-original-imags3e7dazavyje.jpeg?q=70',
      price: 'Rs 9,499',
      rating: '3.6',
      discount: '55% Off',
    },
    {
      name: 'Poco C65',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/u/8/c65-mzb0g8nin-poco-original-imagw6j2kp5t5jek.jpeg?q=70',
      price: 'Rs 29,499',
      rating: '4.6',
      discount: '15% Off',
    },
    {
      name: 'Samsung F14',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/n/k/-original-imagtyxb86ddjhzh.jpeg?q=70',
      price: 'Rs 10,999',
      rating: '4.2',
      discount: '12% Off',
    },
    {
      name: 'Samsung F15 5G',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/e/f/-original-imagymhw8g7tdyhk.jpeg?q=70',
      price: 'Rs 14,999',
      rating: '4.1',
      discount: '17% Off',
    },
    {
      name: 'Iphone 15',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70',
      price: 'Rs 65,999',
      rating: '4.3',
      discount: '10% Off',
    },
    {
      name: 'Iphone 13',
      img: 'https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70',
      price: 'Rs 52,999',
      rating: '4.7',
      discount: '23% Off',
    },
    {
      name: 'Iphone 15 Black',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70',
      price: 'Rs 65,999',
      rating: '4.7',
      discount: '21% Off',
    },
    {
      name: 'Iphone 14 Purple',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/u/f/-original-imaghxa5hvapbfds.jpeg?q=70',
      price: 'Rs 58,999',
      rating: '4.5',
      discount: '15% Off',
    },
    {
      name: 'Iphone 14 Midnight',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',
      price: 'Rs 58,999',
      rating: '4.5',
      discount: '17% Off',
    },
  ];

  
  return (
    <View style={{marginBottom:60}}>
      <Text style={{fontSize: 24, fontWeight: 'bold', margin: 10}}>
         SmartPhones
      </Text>

      <FlatList
      showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item, id}) => <Card item={item} key={id} />}
      />
    </View>
  );
};

export default Mobiles;
