import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, Image, ScrollView } from 'react-native';
import styles from '../styles'

function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.outer}>
      <View style={styles.inner}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/gol.png')}
            style={{ width: 300, height: 150, marginTop: 65 }}
          />
          <View style={styles.viewHome}>
            <Text style={styles.tituloHome}>Bem vindo ao app da gol</Text>
            <Button
              title="Logar"
              color='#FFA500'
              onPress={() => navigation.navigate('Login')}
            />
            <Text> </Text>
            <Button
              title="Cadastrar"
              color='#FFA500'
              onPress={() => navigation.navigate('Cadastro')}
            />
          </View>
          <StatusBar style="auto" />
        </View>
      </View>
    </ScrollView>
  );
}
export default Home;
