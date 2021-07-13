import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../src/screens/Home';
import Payments from '../src/screens/Payments';
import ProductDetails from '../src/screens/ProductDetails';
import Splash from '../src/screens/Splash';
import Categories from '../src/screens/Categories';
import Cart from '../src/screens/Cart';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" unmountInactiveRoutes={true}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />

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
    </Stack.Navigator>
  );
};

const TabNavigator=()=> {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories}/>
        <Stack.Screen name="Cart" component={Cart}/>
      </Stack.Navigator>
    )
}

export {StackNavigator, TabNavigator};
