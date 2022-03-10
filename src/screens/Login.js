import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
// const image = {
//   uri: 'https://www.seekpng.com/png/detail/17-179539_small-blue-circle-transparent-background.png',
// };

const Login = () => {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
      <View style={styles.MainContainer}>
        <View styles={{flex: 1}}>
          <Text style={styles.title}>Login to you account</Text>
        </View>
        <View style={styles.Email}>
          <TextInput
            label="Password"
            secureTextEntry
            left={<TextInput.Icon name="eye" />}
          />
        </View>
        <View style={styles.Password}>
          <TextInput
            label="Password"
            secureTextEntry
            left={<TextInput.Icon name="eye" />}
          />
        </View>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
  },
  title: {
    paddingBottom: 20,
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
  MainContainer: {
    marginTop: 100,
    margin: 20,
    // borderColor: #000,
  },
  Password: {
    marginTop: 20,
  },
});
