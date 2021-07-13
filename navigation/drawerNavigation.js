import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import tabNavigator from './tabNavigator';

const Drawer = createDrawerNavigator();

const DNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={tabNavigator} />
      {/* <Drawer.Screen name="Register" component={FooterNavigator} /> */}
    </Drawer.Navigator>
  );
};

export default DNavigator;
