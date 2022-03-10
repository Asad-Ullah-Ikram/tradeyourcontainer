import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Section1 from '../View/HomeComponent/Section1';
import Section2 from '../View/HomeComponent/Section2';
import Section3 from '../View/HomeComponent/Section3';

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <View> */}
        <Section1 />
        {/* </View> */}

        <Section2 />
        <Section3 />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
