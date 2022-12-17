import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BuildingHighlight from './components/BuildingHighlight';
import Header from './components/Header';
import Hero from './components/Hero';
import { ScrollView } from 'react-native';
import NavigationButtons from './components/NavButtons';

function App() {
  return (
    <ScrollView>
      <Header/>
      <View style={{ position: 'relative' }}>
        <Hero/>
        <BuildingHighlight/>
      </View>
      <NavigationButtons/>
    </ScrollView>
  );
}

export default App;