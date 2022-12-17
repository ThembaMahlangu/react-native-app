import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useScrollHandler } from 'react-native-reanimated';

const NavigationButtons = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const { onScroll } = useScrollHandler({
    scrollY,
  });

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY: scrollY }] }]}>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="ios-home" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="ios-business" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="ios-information-circle-outline" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="ios-mail" size={24} color="#000" />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  button: {
    width: 80,
    alignItems: 'center',
  },
});

export default NavigationButtons;
