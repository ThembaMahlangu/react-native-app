import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Trip1 from '../assets/room4.jpg';
import Trip2 from '../assets/room5.jpg';
import Trip3 from '../assets/room3.jpg';

const styles = StyleSheet.create({
  property: {
    margin: 4,
    color: '#2a2a2a',
  },
  'property h1': {
    fontSize: 30,
  },
  propertycard: {
    marginTop: 3,
    display: 'flex',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: 'rgb(247, 246, 246)',
  },
  'p-card': {
    width: 32,
    textAlign: 'start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 7,
    cursor: 'pointer',
    padding: 10,
    backgroundColor: 'rgb(161, 161, 161)',
  },
  'p-image': {
    height: 200,
    overflow: 'hidden',
    borderRadius: 7,
  },
  'p-image img': {
    width: '100%',
    height: '100%',
    transitionDuration: 300,
    borderRadius: 7,
  },
  'p-image:hover img': {
    transform: [{ scale: 1.3 }],
  },
  'p-card h4': {
    fontSize: 13,
    paddingTop: 9,
    paddingBottom: 2,
  },
  'p-card h3': {
    fontSize: 10,
    color: 'purple',
  },
  '@media screen and (max-width: 850px)': {
    property: {
      margin: 4,
      marginRight: 2,
    },
    propertycard: {
      flexDirection: 'column',
    },
    'p-card': {
      width: '100%',
      marginBottom: 15,
    },
    'p-card button': {
      display: 'inline',
    },
  },
});

function PropertySingle() {
  return (
    <View style={styles.property}>
      <Text style={styles['property h1']}>Featured Apartments</Text>
      <Text>
        There's a lot of Accomodation to discover using the Dweller Affairs plartfom, here's what we selected for the Day
      </Text>
      <View style={styles.propertycard}>
        <View style={styles['p-card']}>
          <View style={styles['p-image']}>
            <Image source={Trip1} alt="image" />
          </View>
          <Text style={styles['p-card h4']}>Mpumelelo</Text>
          <Text style={styles['p-card h3']}>Rental R3 200</Text>
          <Text>One of the best apartments that include free first month rent and a friendly environment</Text>
          <TouchableOpacity>
            <Text>More Info</Text>
          </TouchableOpacity>
        </View>

        <View style={styles['p-card']}>
          <View style={styles['p-image']}>
            <Image source={Trip1} alt="image" />
          </View>
          <Text style={styles['p-card h4']}>Truman House</Text>
          <Text style={styles['p-card h3']}>Rental R3 450</Text>
          <Text>One of the best apartments that include free first month rent and a friendly environment</Text>
          <TouchableOpacity>
            <Text>More Info</Text>
          </TouchableOpacity>
        </View>

        <View style={styles['p-card']}>
          <View style={styles['p-image']}>
            <Image source={Trip2} alt="image" />
          </View>
          <Text style={styles['p-card h4']}>Elevate</Text>
          <Text style={styles['p-card h3']}>Rental R5 000</Text>
          <Text>One of the best apartments that include free first month rent and a friendly environment</Text>
          <TouchableOpacity>
            <Text>More Info</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default PropertySingle;
