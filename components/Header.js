import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Dweller Affairs</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  headerText: {
    fontSize: 20
  }
});

export default Header;
