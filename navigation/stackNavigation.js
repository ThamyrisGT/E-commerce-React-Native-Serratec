import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../src/screens/Home';
import Payments from '../src/screens/Payments';
import ProductDetails from '../src/screens/ProductDetails';
import Splash from '../src/screens/Splash';
import Login from '../src/screens/Login';
import Register from '../src/screens/Register';


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

export {StackNavigator};
