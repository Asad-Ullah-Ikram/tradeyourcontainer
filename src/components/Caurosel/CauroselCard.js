import {StyleSheet, StatusBar, View} from 'react-native';
import React, {useState} from 'react';
import {ScrollView, Animated, SafeAreaView, Dimensions} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import CircularProgress from 'react-native-circular-progress-indicator';

const OFFSET = 50;
const ITEM_WIDTH = Dimensions.get('window').width - OFFSET * 2.5;
const ITEM_HEIGHT = 100;

const cards = [
  {
    title: 'Accepted Requirments',
    value: '50',
    posterUrl: require('../../assets/images/bg1.jpg'),
  },
  {
    title: 'Pending Requests',
    value: '60',
    posterUrl: require('../../assets/images/bg1.jpg'),
  },
  {
    title: 'Total Requirments',
    value: '90',
    posterUrl: require('../../assets/images/bg1.jpg'),
  },
  {
    title: 'Total Requirments',
    value: '90',
    posterUrl: require('../../assets/images/bg1.jpg'),
  },
  ,
];

const CauroselCard = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [value, setValue] = useState(0);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        horizontal={true}
        decelerationRate={'normal'}
        snapToInterval={ITEM_WIDTH}
        style={{marginTop: 10, paddingHorizontal: 0}}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        disableIntervalMomentum
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={12}>
        {cards.map((item, idx) => {
          const inputRange = [
            (idx - 1) * ITEM_WIDTH,
            idx * ITEM_WIDTH,
            (idx + 1) * ITEM_WIDTH,
          ];

          const translate = scrollX.interpolate({
            inputRange,
            outputRange: [0.85, 1, 0.85],
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
          });

          return (
            <Animated.View
              style={{
                width: ITEM_WIDTH,
                height: ITEM_HEIGHT,
                marginLeft: idx === 0 ? OFFSET : undefined,
                marginRight: idx === cards.length - 1 ? OFFSET : undefined,
                opacity: opacity,
                transform: [{scale: translate}],
              }}>
              {
                <View>
                  <Card
                    style={{
                      paddingBottom: 10,
                      paddingTop: 10,
                    }}>
                    <Card.Content>
                      <Title
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          fontWeight: '700',
                          fontSize: 18,
                        }}>
                        {item.title}
                      </Title>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          paddingTop: 20,
                          paddingBottom: 20,
                        }}>
                        <CircularProgress
                          radius={90}
                          value={item.value}
                          textColor="white"
                          fontSize={20}
                          valueSuffix={'%'}
                          inActiveStrokeColor={'#2ecc71'}
                          inActiveStrokeOpacity={0.2}
                          circleBackgroundColor="#389AC3"
                        />
                        <StatusBar style="auto" />
                      </View>
                    </Card.Content>
                  </Card>
                </View>
              }
            </Animated.View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CauroselCard;

const styles = StyleSheet.create({});
