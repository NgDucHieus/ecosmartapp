import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { GestureHandlerRootView, Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

// Seed list
const seedList = [
  { id: '1', name: 'Orange', image: require('/Users/MAY02/Desktop/ecosmart/assets/images/orange.jpg') },
  { id: '2', name: 'Apple', image: require('/Users/MAY02/Desktop/ecosmart/assets/images/orange.jpg') },
];

export default function IndexScreen() {
  const translateX1 = useSharedValue(0); // For Orange
  const translateY1 = useSharedValue(0);

  const translateX2 = useSharedValue(0); // For Apple
  const translateY2 = useSharedValue(0);

  // Gesture for Orange
  const dragGesture1 = Gesture.Pan()
    .onUpdate((event) => {
      translateX1.value = event.translationX;
      translateY1.value = event.translationY;
    })
    .onEnd(() => {
      translateX1.value = 0;
      translateY1.value = 0;
    });

  // Gesture for Apple
  const dragGesture2 = Gesture.Pan()
    .onUpdate((event) => {
      translateX2.value = event.translationX;
      translateY2.value = event.translationY;
    })
    .onEnd(() => {
      translateX2.value = 0;
      translateY2.value = 0;
    });

  // Animated Styles
  const animatedStyle1 = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX1.value }, { translateY: translateY1.value }],
  }));

  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX2.value }, { translateY: translateY2.value }],
  }));

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Drag the Seeds</Text>

        {/* Draggable Orange */}
        <GestureDetector gesture={dragGesture1}>
          <Animated.View style={[styles.seedContainer, animatedStyle1]}>
            <Image source={seedList[0].image} style={styles.seedImage} />
            <Text style={styles.seedName}>{seedList[0].name}</Text>
          </Animated.View>
        </GestureDetector>

        {/* Draggable Apple */}
        <GestureDetector gesture={dragGesture2}>
          <Animated.View style={[styles.seedContainer, animatedStyle2]}>
            <Image source={seedList[1].image} style={styles.seedImage} />
            <Text style={styles.seedName}>{seedList[1].name}</Text>
          </Animated.View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  seedContainer: {
    width: 100,
    height: 100,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  seedImage: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  seedName: {
    fontSize: 14,
    fontWeight: '500',
  },
});
