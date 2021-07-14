import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackNavigator} from './stackNavigation';
import Categories from '../src/screens/Categories';
import Cart from '../src/screens/Cart';
import theme from '../src/global/theme';
import IconHome from 'react-native-vector-icons/Ionicons';
import IconList from 'react-native-vector-icons/MaterialIcons';
import IconCart from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();



const BottomTabNavigator = () => { 
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.gray,
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <IconHome name="home" size={40} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({color}) => (
            <IconList name="list-alt" size={50} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({color}) => (
            <IconCart name="cart" size={50} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};


export default BottomTabNavigator;
