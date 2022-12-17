import React from 'react';
import { View, Text, Image } from 'react-native';

const BuildingHighlight = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Property of The Month</Text>
    <View style={styles.buildingContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: 'https://images.squarespace-cdn.com/content/v1/56a78d1a1f40390a911ce580/1559284204374-R2XN5O4Y4HFRXBDDE5IQ/DJI_0016.jpg' }} style={[styles.image, styles.leftImage]} />
        <Image source={{ uri: 'https://images.squarespace-cdn.com/content/v1/56a78d1a1f40390a911ce580/1556813611747-QDWWNHI97CVOBZ3BRTPA/2X0A5602.jpg' }} style={[styles.image, styles.rightImage]} />
      </View>
      <Text style={styles.buildingTitle}>Braamfontein Gate</Text>
      <Text style={styles.description}>This is a description of building 1</Text>
    </View>
    <View style={styles.buildingContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: 'https://student.afhco.co.za/wp-content/uploads/2020/02/352.jpg' }} style={[styles.image, styles.leftImage]} />
        <Image source={{ uri: 'https://i0.wp.com/studenthub24.com/wp-content/uploads/2022/01/IMG_1088-1536x1024-1-1024x683.jpg' }} style={[styles.image, styles.rightImage]} />
      </View>
      <Text style={styles.buildingTitle}>Mpumelelo Student Accomodation</Text>
      <Text style={styles.description}>This is a description of building 2</Text>
    </View>
  </View>
);

const styles = {
  container: {
    marginVertical: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buildingContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  buildingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 150,
    height: 200,
    marginRight: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
};

export default BuildingHighlight;
