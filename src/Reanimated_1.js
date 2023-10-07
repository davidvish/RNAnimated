import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Animated, {useSharedValue,withSpring,withTiming} from 'react-native-reanimated';

const ReanimatedOne = () => {
  const animatedValue = useSharedValue(100);
  const handlePressWithTime = () => {
    animatedValue.value = withTiming(animatedValue.value + 50, {duration:1000})
  }
  const handlePressWithSpring = () => {
    animatedValue.value = withSpring(animatedValue.value + 50)
  }
  return (
    <View>
      <Animated.View
        style={{
          height: animatedValue,
          width: animatedValue,
          backgroundColor: 'red',
        }}></Animated.View>
      <Button onPress={handlePressWithTime} title="abc" />
    </View>
  );
};

export default ReanimatedOne;

const styles = StyleSheet.create({});
