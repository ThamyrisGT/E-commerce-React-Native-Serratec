import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../src/screens/Home';
import Payments from '../src/screens/Payments';
import ProductDetails from '../src/screens/ProductDetails';
import Cart from '../src/screens/Cart';
import DetailsCategories from '../src/screens/DetailsCategories';
import DetailsCart from '../src/screens/DetailsCart';
import Categories from '../src/screens/Categories';
import Login from '../src/screens/Login';
import Register from '../src/screens/Register';

const Stack = createStackNavigator();

const CategoriaStack =()=>{

  return(
  <Stack.Navigator initialRouteName="Categories" unmountInactiveRoutes={true}>
     <Stack.Screen
        name="Categories"
        component={Categories}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="DetailsCategories"
        component={DetailsCategories}
        options={{headerShown: false}}
      />
  </Stack.Navigator>
  );
}
const CarrinhoStack =()=>{

  return(
  <Stack.Navigator initialRouteName="Cart" unmountInactiveRoutes={true}>
     <Stack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="DetailsCart"
        component={DetailsCart}
        options={{headerShown: false}}
      />
  </Stack.Navigator>
  );
}
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" unmountInactiveRoutes={true}>

      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Payments"
        component={Payments}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {StackNavigator,CategoriaStack,CarrinhoStack};
