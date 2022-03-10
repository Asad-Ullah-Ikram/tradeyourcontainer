import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './Home';
import About from './About';

const Drawer = createDrawerNavigator();

const MainStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
