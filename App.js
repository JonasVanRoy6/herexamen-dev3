import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import DataFetcher from './src/components/DataFetcher'; // Zorg ervoor dat het pad naar DataFetcher correct is

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <AppNavigator />
      {/* Voeg de DataFetcher-component toe als je deze in de hoofdweergave wilt opnemen */}
      {/* Verwijder de volgende regel als je DataFetcher alleen op een specifieke pagina wilt gebruiken */}
      { <DataFetcher /> }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
