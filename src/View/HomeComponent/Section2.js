import {StyleSheet, Text, View, TextInput, CheckBox} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dropdown1 from '../../components/Dropdown/Dropdown1';
import Dropdown2 from '../../components/Dropdown/Dropdown2';
import Dropdown3 from '../../components/Dropdown/dropdown3';
import Dropdown4 from '../../components/Dropdown/Dropdown4';
import {Checkbox} from 'react-native-paper';

const Section2 = () => {
  const [text, onChangeText] = React.useState(null);
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.buttonView}>
        <Icon
          name="search"
          size={25}
          color="black"
          style={{
            height: 25,
            width: 25,
            alignSelf: 'center',
            marginRight: 30,
          }}
        />
        <Text style={styles.title}>Search Requiements</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter Drop-off Location"
          placeholderTextColor="black"
        />
        <Dropdown1 />
        <Dropdown2 />
        <Dropdown3 />
        <Dropdown4 />
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox
          style={styles.checkbox}
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={styles.label}>Looking For Special Equipements?</Text>
      </View>
      <View style={styles.button}>
        <Icon
          name="search"
          size={25}
          color="white"
          style={{
            height: 25,
            width: 25,
            alignSelf: 'center',
            marginRight: 20,
          }}
        />
        <Text style={styles.buttonText}>Search</Text>
      </View>
    </View>
  );
};

export default Section2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6E8F0',
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 5,
    height: 40,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: 'black',
  },
  input: {
    height: 40,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 24,
    borderWidth: 0,
    padding: 10,
    borderBottomWidth: 1.2,
  },
  checkboxContainer: {
    flexDirection: 'row',
    // marginBottom: 10,
    marginLeft: 20,
    marginTop: 10,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
    color: 'black',
    fontWeight: '700',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 2,
    backgroundColor: '#389AC3',
    marginTop: 10,
    marginLeft: 90,
    marginRight: 90,
    height: 40,
    marginBottom: 30,
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 19,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: 'white',
  },
});
