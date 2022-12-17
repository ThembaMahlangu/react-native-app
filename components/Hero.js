import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';

const Hero = () => {
  const [index, setIndex] = useState(0);

  // An array of image URLs that will be used in the carousel
  const images = [
    'https://picsum.photos/id/10/800/400',
    'https://picsum.photos/id/100/800/400',
    'https://picsum.photos/id/1000/800/400'
  ];

  // A helper function that increments the index and sets it back to 0
  // when the end of the images array is reached
  const nextImage = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <View style={styles.heroContainer}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={nextImage}
      >
        {images.map((image, i) => (
          <View key={i} style={styles.heroSlide}>
            <Image style={styles.heroImage} source={{ uri: image }} />
            <Text style={styles.heroText}>Home</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  heroSlide: {
    width: Dimensions.get('window').width,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  heroImage: {
    width: Dimensions.get('window').width,
    height: 200
  },
  heroText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  }
});

export default Hero;
