import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Tabletcards from './Tabletcards';

const Tablets = () => {
  const data = [
    {
      name: 'REDMI Pad',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/d/d/n/-original-imaggp4gtdze4hfd.jpeg?q=70',
      price: 'Rs 14,990',
      rating: '4.6',
      discount: '27% Off',
    },
    {
      name: 'Lenovo Tab M10',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/h/4/s/-original-imagu2h39539yhry.jpeg?q=70',
      price: 'Rs 8,499',
      rating: '4.2',
      discount: '17% Off',
    },
    {
      name: 'RealMe Pad2',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/o/y/8/rmp2204-realme-original-imagrhcqdhdyc9tg.jpeg?q=70',
      price: 'Rs 19,999',
      rating: '4.2',
      discount: '16% Off',
    },
    {
      name: 'Xiaomi Pad 6',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/8/p/n/vhu4401in-xiaomi-original-imagtz5x4tdswgyj.jpeg?q=70',
      price: 'Rs 28,999',
      rating: '4.3',
      discount: '35% Off',
    },
    {
      name: 'Samsung Galaxy Tab A7',
      img: 'https://rukminim2.flixcart.com/image/312/312/kpvivm80/tablet/n/t/v/sm-t225nzsains-samsung-original-imag4yryasv6s7h3.jpeg?q=70',
      price: 'Rs 19,499',
      rating: '4.4',
      discount: '25% Off',
    },
    {
      name: 'Lenovo Tab Yoga',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/v/6/4/-original-imagu2h3sfh3mhhb.jpeg?q=70',
      price: 'Rs 14,499',
      rating: '4.0',
      discount: '63% Off',
    },
    {
      name: 'One Plus Pad Go',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/v/w/t/-original-imagu2mdexmnb7bw.jpeg?q=70',
      price: 'Rs 23,999',
      rating: '4.6',
      discount: '55% Off',
    },
    {
      name: 'OPPO Pad Air 4',
      img: 'https://rukminim2.flixcart.com/image/312/312/l5h2xe80/tablet/f/l/g/6650287-oppo-original-imagg55sjgrashbc.jpeg?q=70',
      price: 'Rs 13,999',
      rating: '4.2',
      discount: '65% Off',
    },
  ];
  return (
    <View style={{marginBottom: 60}}>
      <Text style={{fontSize: 24, fontWeight: 'bold', margin: 10}}>
        Tablets
      </Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item, id}) => <Tabletcards item={item} key={id} />}
      />
    </View>
  );
};

export default Tablets;
