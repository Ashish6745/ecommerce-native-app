import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Card from './MobileCard'


const Computers = () => {
  const data = [
   
    {
      name: 'Lenovo Dual  Core 4th Gen',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/screen-guard/screen-guard/4/b/d/asg-14715-saco-original-imaghqbah9jycshw.jpeg?q=70',
      price: 'Rs 20,490',
      rating: '4.0',
      discount: '51% Off',
    },
    {
      name: 'ASUS TUF Gaming F15',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/v/y/z/-original-imagtucnqsqpbvk6.jpeg?q=70',
      price: 'Rs 59,990',
      rating: '4.5',
      discount: '33% Off',
    },
    {
      name: 'Macbook AIR Apple M2',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/1/n/p/-original-imagfdfew8gszzhk.jpeg?q=70',
      price: 'Rs 95,990',
      rating: '4.7',
      discount: '16% Off',
    },
    {
      name: 'HP Pavilion Intel Core I5',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/1/l/p/-original-imagwzwcncgpnqub.jpeg?q=70',
      price: 'Rs 66,990',
      rating: '4.3',
      discount: '16% Off',
    },
    {
      name: 'Samsung Galaxy Book3',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/l/d/z/galaxy-book3-thin-and-light-laptop-samsung-original-imagnb2c6j8rmwsh.jpeg?q=70',
      price: 'Rs 69,990',
      rating: '4.4',
      discount: '30% Off',
    },
    {
      name: 'Infinix Inbook Y1',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/u/u/k/-original-imagmxuravjcmdwu.jpeg?q=70',
      price: 'Rs 25,990',
      rating: '4.1',
      discount: '56% Off',
    },
    {
      name: 'Dell Intel Core I3',
      img: 'https://rukminim2.flixcart.com/image/612/612/l1fc0i80/computer/9/5/r/inspiron-3525-thin-and-light-laptop-dell-original-imagczzfezyd7tqs.jpeg?q=70',
      price: 'Rs 37,790',
      rating: '4.2',
      discount: '30% Off',
    },
  ]
  return (
    <View style={{marginBottom:60}}>
    <Text style={{fontSize: 24, fontWeight: 'bold', margin: 10}}>
        Laptops
    </Text>

    <FlatList
    showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({item, id}) => <Card item={item} key={id} />}
    />
    
  </View>
  )
}

export default Computers