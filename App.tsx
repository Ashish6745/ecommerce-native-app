import {View, Text, StatusBar} from 'react-native';
import React, { useContext } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './component/Home';
import Mobiles from './component/Mobiles';
import Cart from './component/Cart';
import Computers from './component/Computers';
import Tablets from './component/Tablets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CartContext } from './contextApi/ContextAPI';

const stack = createNativeStackNavigator();
const bottom = createBottomTabNavigator();


const Bottom = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#172774',
        },
        headerTitleStyle: {
          color: 'white',
        },
        headerTintColor: 'white',
      }}>
      <stack.Screen name="Home" component={Home} />
      <stack.Screen
        name="Mobiles"
        component={Mobiles}
        options={{
          headerStyle: {
            backgroundColor: '#172774',
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerTintColor: 'white',
        }}
      />
      <stack.Screen name="Computers" component={Computers} />
      <stack.Screen name="Tablets" component={Tablets} />
    </stack.Navigator>
  );
};

const App = () => {
  const{cart, mobile,tab} = useContext(CartContext)
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#172774'} />
      <bottom.Navigator
        screenOptions={{
          tabBarStyle:{
            backgroundColor:'#172774',
            borderRadius:50,
            margin:10
          },
          headerStyle: {
            backgroundColor: '#172774',
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerTintColor: 'white',
        }}>
        <bottom.Screen
          name="Bottom"
          component={Bottom}
          options={{
           
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" size={30} color="#fff" />
            ),
          
            headerShown: false,
            tabBarLabel: '',
          }}
        />
        <bottom.Screen
          name="Cart"
          component={Cart}
          options={{
          
          tabBarBadge: cart.length + mobile.length + tab.length,
            tabBarBadgeStyle:{backgroundColor:'red'},
            tabBarLabel: '',
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="cart-variant"
                size={30}
                color="#fff"
              />
            ),
            
          }}
        />
      </bottom.Navigator>
    </NavigationContainer>
  );
};

export default App;
