import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);

const ProfileZoom = () => {
  const AnimatedWidth = useSharedValue(70);
  const AnimatedHeight = useSharedValue(70);
  const AnimatedY = useSharedValue(0);
  const AnimatedX = useSharedValue(0);
  const AnimatedScale = useSharedValue(0);
  const AnimatedBottom = useSharedValue(0);

  const AnimateStyle = useAnimatedStyle(() => {
    return {
      width: AnimatedWidth.value,
      height: AnimatedHeight.value,
      transform: [{translateY: AnimatedY.value}, {translateX: AnimatedX.value}],
    };
  });

  const animatedStyleScale = useAnimatedStyle(() => {
    return {
      transform: [{scale: AnimatedScale.value}],
    };
  });

  const animatedStyleBottom = useAnimatedStyle(() => {
    return {
      transform: [{translateX: AnimatedBottom.value}],
    };
  });
  const handleProfile = () => {
    if (AnimatedWidth.value == 70) {
      AnimatedBottom.value = withTiming(-Dimensions.get('window').width, {
        duration: 1000,
      });
      AnimatedScale.value = withTiming(1, {duration: 1000});
      AnimatedWidth.value = withTiming(300, {duration: 1000});
      AnimatedHeight.value = withTiming(300, {duration: 1000});
      AnimatedY.value = withTiming(150, {duration: 1000});
      AnimatedX.value = withTiming(70, {duration: 1000});
    }
  };
  return (
    <View style={{flex: 1}}>
      <AnimatedBtn
        onPress={() => {
          AnimatedBottom.value = withTiming(0, {
            duration: 1000,
          });

          AnimatedScale.value = withTiming(0, {duration: 1000});
          AnimatedWidth.value = withTiming(70, {duration: 1000});
          AnimatedHeight.value = withTiming(70, {duration: 1000});
          AnimatedY.value = withTiming(0, {duration: 1000});
          AnimatedX.value = withTiming(0, {duration: 1000});
        }}
        style={[{left: 15}, animatedStyleScale]}>
        <Text style={{fontSize: 30}}>X</Text>
      </AnimatedBtn>
      <TouchableOpacity onPress={handleProfile}>
        <AnimatedImage
          source={require('./User-Avatar-Profile-PNG.png')}
          style={[{height: 70, width: 70}, AnimateStyle]}
        />
      </TouchableOpacity>
      <Animated.View
        style={[
          {
            padding: 10,
            backgroundColor: 'red',
            position: 'absolute',
            bottom: 0,
            width: Dimensions.get('window').width,
          },
          animatedStyleBottom,
        ]}>
        <Text style={{textAlign: 'center', fontSize: 30, color: '#fff'}}>
          David Vishwakarma
        </Text>
      </Animated.View>
    </View>
  );
};

export default ProfileZoom;

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

