import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Routes from './routes';

function App() {
  return (
   <View>
     <StatusBar/>
     <Routes/>
   </View>
  );
}

export default App;