import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import BottomTabNavigator from "../../navigation/tabNavigator";


const Routes = () => {
    return (
      <NavigationContainer>
      <BottomTabNavigator/>
      </NavigationContainer>
    );
  };
  export default Routes;