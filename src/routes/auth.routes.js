import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
//import { StackNavigator } from '../../navigation/stackNavigation';
//import BottomTabNavigator from "../../navigation/tabNavigator";
import DNavigator from '../../navigation/drawerNavigation';

// import Login from '../screens/Login';
// import Register from '../screens/Register';
// import Cart from '../screens/Cart';
// import Categories from '../screens/Categories';

const Routes = () => {
    return (
      <NavigationContainer>
      <DNavigator/>
      </NavigationContainer>
    );
  };
  export default Routes;