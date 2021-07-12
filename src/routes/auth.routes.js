import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Cart from '../screens/Cart';
import Payments from '../screens/Payments';
import ProductDetails from '../screens/ProductDetails';
import Splash from '../screens/Splash';

const Stack = createStackNavigator();

const Routes = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" unmountInactiveRoutes={true}>
          <Stack.Screen
            name="Home"
            component={Home}
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
            name="Cart"
            component={Cart}
            options={{headerShown: false}}
          />
          
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  export default Routes;