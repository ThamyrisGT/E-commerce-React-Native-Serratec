import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNavigator} from './stackNavigation';
import Cart from "../src/screens/Cart";
import Categories from '../src/screens/Categories';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;