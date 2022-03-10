import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {Card, Title, Paragraph} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import CauroselCard from '../../components/Caurosel/CauroselCard';

const backgroundImage = require('../../assets/images/bg1.png');
const Section1 = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.hometopsection}>
          <View>
            <Text style={styles.username}>XYZ</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="user"
              size={28}
              color="black"
              style={{
                height: 28,
                width: 28,
                alignSelf: 'center',
                // position: 'relative',
                // left: 210,
              }}
            />
            <Icon
              name="bell"
              size={28}
              color="black"
              style={{
                height: 28,
                width: 28,
                alignSelf: 'center',
                position: 'relative',
                // left: 220,
              }}
            />
          </View>
        </View>
        {/* /////////////////////////////   card start                     /////////////////////////////////////////////// */}
        <View style={styles.cardSec}>
          <Card style={styles.card}>
            <Card.Content>
              <Title style={{color: 'black', fontWeight: 'bold'}}>
                No more operational hassle!
              </Title>
              <Paragraph style={{color: 'black', fontWeight: '700'}}>
                Move more equipement at low rates and in less time,avoid
                demurrage & detention charges and get access to over 1 million
                containers from 300+ partners online.
              </Paragraph>
              <View style={styles.parabutton}>
                <Icon
                  name="file"
                  size={22}
                  color="white"
                  style={{
                    height: 25,
                    width: 25,
                    alignSelf: 'center',
                    marginRight: 10,
                  }}
                />
                <Text style={styles.parabuttonText}>View All Request</Text>
              </View>
            </Card.Content>
          </Card>
        </View>
        {/* /////////////////////////////   caurosel slider end                   /////////////////////////////////////////////// */}
        <CauroselCard />
        {/* /////////////////////////////   caurosel slider start                   /////////////////////////////////////////////// */}
      </ImageBackground>
      {/* /////////////////////////////   card end                   /////////////////////////////////////////////// */}

      {/* /////////////////////////////   button start                   /////////////////////////////////////////////// */}

      <View style={styles.button}>
        <Icon
          name="plus"
          size={25}
          color="white"
          style={{
            height: 25,
            width: 25,
            alignSelf: 'center',
            marginRight: 30,
          }}
        />
        <Text style={styles.buttonText}>Upload Requiements</Text>
      </View>

      {/* /////////////////////////////    button end                   /////////////////////////////////////////////// */}
    </View>
  );
};

export default Section1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 600,
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  cardSec: {
    margin: 25,
  },
  card: {
    backgroundColor: 'rgba(355, 355, 255, 0.6)',
  },
  parabutton: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#389AC3',
    margin: 5,
    height: 40,
  },
  parabuttonText: {
    fontWeight: '700',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: 'white',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#389AC3',
    margin: 20,
    height: 40,
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: 'white',
  },
  hometopsection: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    margin: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    // margin: 30,
  },
});
