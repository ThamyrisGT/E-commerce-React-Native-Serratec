import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../src/screens/Home';
import Payments from '../src/screens/Payments';
import ProductDetails from '../src/screens/ProductDetails';
import Splash from '../src/screens/Splash';
import Categories from '../src/screens/Categories';
import Login from '../src/screens/Login';
import Register from '../src/screens/Register';
import Cart from '../src/screens/Cart';
import More from '../src/screens/More';

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

const FooterNavigator=()=> {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories}/>
        <Stack.Screen name="Cart" component={Cart}/>
        <Stack.Screen name="More" component={More}/>
      </Stack.Navigator>
    )
}

export {StackNavigator, FooterNavigator};
