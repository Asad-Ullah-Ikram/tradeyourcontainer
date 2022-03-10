import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Dropdown3 = () => {
  const [pickerValue, setPickerValue] = useState('Javascrpit');

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Select Trade Type</Text>
        <Picker
          style={styles.picker}
          selectedValue={pickerValue}
          onValueChange={itemValue => setPickerValue(itemValue)}>
          <Picker.Item label="Select" value="Select" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
  picker: {
    width: 300,
    height: 45,
    borderColor: 'red',
    borderwidth: 2,
    backgroundColor: 'white',
    color: 'black',
  },
  text: {
    color: 'black',
    fontWeight: '700',
    paddingBottom: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
});

export default Dropdown3;
