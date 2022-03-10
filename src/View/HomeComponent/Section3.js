import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Section3 = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'red'}}>Section3</Text>
    </View>
  );
};

export default Section3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
