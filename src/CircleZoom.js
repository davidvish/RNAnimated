import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect } from 'react';
import Animated ,{
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const CircleZoom = () => {
  const w = useSharedValue(100);
  const h = useSharedValue(100);
  const r = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: w.value,
      height: h.value,
      borderRadius: r.value,
      // transform:[{translateY: h.value * 2},{translateX:w.value}]
    };
  });


   useEffect(()=>{
   let interval = setTimeout(()=>{
      handlePress()
    },2000)

   }, [])


  const handlePress = () => {
    if (w.value == 100) {
      w.value = withTiming(200,{duration:2000});
      h.value = withTiming(200,{duration:2000});
      r.value = withTiming(100,{duration:2000});
    } else {
      w.value = withTiming(100,{duration:2000});
      h.value = withTiming(100,{duration:2000});
      r.value = withTiming(0,{duration:2000});
    }
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={[
          {backgroundColor: 'red', height: 100, width: 100},
          animatedStyle,
        ]}></Animated.View>

      <TouchableOpacity
        onPress={handlePress}
        style={{
          width: '80%',
          height: 50,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}>
        <Text style={{color: '#fff'}}>Scale Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CircleZoom;

const styles = StyleSheet.create({});
