import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, ScrollView } from 'react-native';
import styles from '../styles'
import candidatos from '../candidatos'

function Resultado({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.outer}>
      <View style={styles.inner}>
        <View style={styles.container}>
          <View style={styles.viewHome}>
            <Text style={styles.tituloHome}>Total de votos</Text>
            <Text style={styles.text}>Candidato 1: {candidatos[0].votos}</Text>
            <Text style={styles.text}>Candidato 2: {candidatos[1].votos}</Text>
            <Text style={styles.text}>Candidato 3: {candidatos[2].votos}</Text>
            <Text style={styles.text}>Candidato 4: {candidatos[3].votos}</Text>
            <Text style={styles.text}>Em branco: {candidatos[4].votos}</Text>
            
            <Text> </Text>
            <Button
              title="Home"
              color='gray'
              onPress={() => navigation.navigate('Home')}
            />
          </View>
          <StatusBar style="auto" />
        </View>
      </View>
    </ScrollView>
  );
}
export default Resultado;
