import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Animated,{useAnimatedStyle, useSharedValue, withSpring, withTiming} from 'react-native-reanimated';

const Card = () => {
  const [count, setCount] = useState(0);
  const [btn, setBtn] = useState(false);
  const animatedY = useSharedValue(0);
  const animatedX = useSharedValue(0);
  const scale = useSharedValue(0);
  const scale2 = useSharedValue(1)
  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: animatedX.value},
        {translateY: animatedY.value},
        {scale: scale.value},
      ],
    };
  });
  const animationStyle2 = useAnimatedStyle(() => {
    return {
      transform: [
       
        {scale: scale2.value},
      ],
    };
  });
  return (
    <View style={{flex: 1}}>
      <Image
        source={require('./shoes.jpg')}
        style={{width: '100%', height: 250}}
      />

      <View
        style={{
          backgroundColor: '#fff',
          height: 60,
          width: 60,
          position: 'absolute',
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          right: 20,
          top: 20,
        }}>
        <Animated.View
          style={[{
            position: 'absolute',
            backgroundColor: 'red',
            width: 25,
            height: 25,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            right: 0,
            top: 0,
            zIndex: 9999999,
          },animationStyle2]}>
          <Text style={{color: '#fff', fontSize: 15}}>{count}</Text>
        </Animated.View>
        <Image style={{width: 40, height: 40}} source={require('./card.png')} />
      </View>
      <View>
        <Text style={{fontSize: 25, paddingVertical: 5, color: '#000'}}>
          {' '}
          {'New styles shoes'}
        </Text>
        <Text style={{fontSize: 20, textAlign: 'justify'}}>
          Lorem ipsum is typically a corrupted version of De finibus bonorum et
          malorum, a 1st-century BC text by the Roman statesman and philosopher
          Cicero, with words altered, added, and removed to make it nonsensical
          and improper Latin. The first two words themselves are a truncation of
          'dolorem ipsum. Versions of the Lorem ipsum text have been used in
          typesetting at least since the 1960s, when it was popularized by
          advertisements for Letraset transfer sheets. Lorem ipsum was
          introduced to the digital world in the mid-1980s, when Aldus employed
          it in graphic and word-processing templates for its desktop publishing
          program PageMaker. Other popular word processors, including Pages and
          Microsoft Word.
        </Text>
        <Animated.View
          style={[{
            backgroundColor: 'red',
            width: 25,
            height: 25,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            alignSelf: 'center',
          },animationStyle]}>
          <Text style={{color: '#fff', fontSize: 15}}>{'+1'}</Text>
        </Animated.View>
        <TouchableOpacity
        disabled={btn} 
        onPress={()=>{
            if(animatedX.value ===0 ){
                setBtn(true)
                scale.value=1
                animatedX.value=withTiming(175,{duration:2000})
                animatedY.value=withTiming(-675,{duration:2000})
                setTimeout(()=>{
                    scale.value=0
                    
                    animatedX.value=withTiming(0,{duration:1500})
                    animatedY.value=withTiming(0,{duration:1500})
                    scale2.value = withSpring(1.5)
                    setBtn(false)  
                    setTimeout(()=>{
                        scale2.value = withSpring(1)
                        setCount(count + 1)
                    },200)
                },2500)
            }
        }}
          style={{
            backgroundColor: '#000',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            width: '90%',
            alignSelf: 'center',
            marginVertical: 10,
          }}>
          <Text style={{fontSize: 18, color: '#fff'}}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
