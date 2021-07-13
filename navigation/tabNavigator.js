import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {StackNavigator,FooterNavigator } from './stackNavigation';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Categories" component={FooterNavigator} />
      <Tab.Screen name="Cart" component={FooterNavigator} />
      <Tab.Screen name="More" component={FooterNavigator} />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;