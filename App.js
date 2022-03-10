import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Login from './src/screens/Login';
import {Provider as PaperProvider} from 'react-native-paper';
import MainStack from './src/screens/MainStack';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <MainStack />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
