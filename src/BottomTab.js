import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);

const BottomTab = () => {
  const [selectTab, setSelectTab] = useState(0);
  const animatedX = useSharedValue(0);
  const animatedY = useSharedValue(0);
  const animatedBtnY1 = useSharedValue(0);
  const animatedBtnY2 = useSharedValue(0);
  const animatedBtnY3 = useSharedValue(0);

  const [color1, setColor1] = useState('black');
  const [color2, setColor2] = useState('black');
  const [color3, setColor3] = useState('black');

  useEffect(() => {
    if (selectTab === 0) {
      setColor2('black')
      setColor3('black')

      animatedY.value = withTiming(50, {duration: 500}); // going down
      setTimeout(() => {
        animatedX.value = withTiming(0, {duration: 500}); // slide left and right
      }, 500);
      animatedBtnY1.value = withTiming(0, {duration: 500}); // going = image

      setTimeout(() => {
        animatedY.value = withTiming(-150, {duration: 500}); // going up
        animatedBtnY1.value = withDelay(100, withTiming(-100, {duration: 500}));

        setTimeout(() => {
          animatedY.value = withTiming(0, {duration: 500}); // going up
          animatedBtnY1.value = withTiming(0, {duration: 500}); // going = Image
          setTimeout(()=>{
            setColor1('white')

          },500)
        }, 500);
      }, 1000);
    } else if (selectTab === 1) {
      setColor1('black')
      setColor3('black')
      animatedY.value = withTiming(50, {duration: 500});
      animatedBtnY2.value = withTiming(0, {duration: 500});

      setTimeout(() => {
        animatedX.value = withTiming(100, {duration: 500});
      }, 500);
      setTimeout(() => {
        animatedY.value = withTiming(-150, {duration: 500}); // going up
        animatedBtnY2.value = withDelay(100, withTiming(-100, {duration: 500}));

        setTimeout(() => {
          animatedY.value = withTiming(0, {duration: 500}); // going up
          animatedBtnY2.value = withTiming(0, {duration: 500});
         setTimeout(()=>{
          setColor2('white')
         },500)
        }, 500);
      }, 1000);
    } else {
      setColor1('black')
      setColor2('black')
      animatedY.value = withTiming(50, {duration: 500});
      animatedBtnY3.value = withTiming(0, {duration: 500});

      setTimeout(() => {
        animatedX.value = withTiming(200, {duration: 500});
      }, 500);
      setTimeout(() => {
        animatedY.value = withTiming(-100, {duration: 500}); // going up
        animatedBtnY3.value = withDelay(100, withTiming(-150, {duration: 500}));
        setTimeout(() => {
          animatedY.value = withTiming(0, {duration: 500}); // going up
          animatedBtnY3.value = withTiming(0, {duration: 500});
          setTimeout(()=>{
            setColor3('white')
           },500)
        }, 500);
      }, 1000);
    }
  }, [selectTab]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animatedX.value}, {translateY: animatedY.value}],
    };
  });

  const animatedStyleBtn1 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedBtnY1.value}],
    };
  });
  const animatedStyleBtn2 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedBtnY2.value}],
    };
  });
  const animatedStyleBtn3 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedBtnY3.value}],
    };
  });
  return (
    <View style={{flex: 1, backgroundColor: '#ccc'}}>
      <View
        style={{
          width: '100%',
          height: 80,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'row',
          elevation: 10,
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 0,
        }}>
        <Animated.View
          style={[
            {
              backgroundColor: 'red',
              height: 60,
              width: 60,
              borderRadius: 100,
              position: 'absolute',
            },
            animatedStyle,
          ]}></Animated.View>
        <AnimatedBtn
          onPress={() => setSelectTab(0)}
          style={[
            {
              height: 50,
              width: 50,
              alignItems: 'center',
              justifyContent: 'center',
            },
            animatedStyleBtn1,
          ]}>
          <Image
            source={require('./card.png')}
            style={{height: 50, width: 50, tintColor: color1}}
          />
        </AnimatedBtn>
        <AnimatedBtn
          onPress={() => setSelectTab(1)}
          style={[
            {
              height: 50,
              width: 50,
              alignItems: 'center',
              justifyContent: 'center',
            },
            animatedStyleBtn2,
          ]}>
          <Image
            source={require('./card.png')}
            style={{height: 50, width: 50, tintColor: color2}}
          />
        </AnimatedBtn>
        <AnimatedBtn
          onPress={() => setSelectTab(2)}
          style={[
            {
              height: 50,
              width: 50,
              alignItems: 'center',
              justifyContent: 'center',
            },
            animatedStyleBtn3,
          ]}>
          <Image
            source={require('./card.png')}
            style={{height: 50, width: 50, tintColor: color3}}
          />
        </AnimatedBtn>
      </View>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
