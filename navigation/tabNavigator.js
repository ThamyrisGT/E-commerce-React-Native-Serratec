import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {StackNavigator,TabNavigator } from './stackNavigation';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Categories" component={TabNavigator} />
      <Tab.Screen name="Cart" component={TabNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;