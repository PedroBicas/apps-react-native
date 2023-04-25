import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, ScrollView } from 'react-native';
import styles from '../styles'

function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.outer}>
      <View style={styles.inner}>
        <View style={styles.container}>
          <View style={styles.viewHome}>
            <Text style={styles.tituloHome}>Eleições 2022</Text>
            <Button
              title="Votar"
              color='gray'
              onPress={() => navigation.navigate('Votar')}
            />
            <Button
              title="Resultado"
              color='gray'
              onPress={() => navigation.navigate('Resultado')}
            />
            <Text> </Text>
          </View>
          <StatusBar style="auto" />
        </View>
      </View>
    </ScrollView>
  );
}
export default Home;
