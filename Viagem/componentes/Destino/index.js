import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, Button, View, Image, ScrollView } from 'react-native';
import styles from '../styles'
import destinoFinal from '../destinos'

function Destino({ navigation }) {
    const destinos = [{ 'destino': 'Nova Iorque', 'passagem': '1000R$', 'imgName': 'novaiorque' }, { 'destino': 'Paris', 'passagem': '1500R$', 'imgName': 'paris' }, { 'destino': 'Lisboa', 'passagem': '800R$', 'imgName': 'lisboa' }, { 'destino': 'Dubai', 'passagem': '1900R$', 'imgName': 'dubai' }, { 'destino': 'Grecia', 'passagem': '2000R$', 'imgName': 'grecia' }]
    function SalvarDados(destino){
        destinoFinal.pop()
        destinoFinal.push(destino)
        console.log(destinoFinal)
        navigation.navigate('Passagem')
    }
    return (
        <ScrollView contentContainerStyle={styles.outer}>
            <View style={styles.inner}>
                <View style={styles.container}>
                    <Button
                        title='< Home'
                        onPress={() => navigation.navigate('Home')}
                        color='#FFA500'
                    />
                    <View style={styles.form}>
                        <Text style={styles.titulo}>Destinos</Text>
                        <View style={styles.cardDestino}>
                            <Text
                                style={styles.tituloDestinos}
                            >{destinos[0].destino}</Text>
                            <Image
                                source={require('../../assets/' + destinos[0].imgName + '.jpg')}
                                style={styles.destinoImg}
                            />
                            <Text
                                style={styles.textDestino}
                            >Preço da passagem: {destinos[0].passagem}</Text>
                            <Button
                                title="Passagem >"
                                color='#FFA500'
                                onPress={() => SalvarDados(destinos[0])}
                            />
                        </View>
                        <View style={styles.cardDestino}>
                            <Text
                                style={styles.tituloDestinos}
                            >{destinos[1].destino}</Text>
                            <Image
                                source={require('../../assets/' + destinos[1].imgName + '.jpg')}
                                style={styles.destinoImg}
                            />
                            <Text
                                style={styles.textDestino}
                            >Preço da passagem: {destinos[1].passagem}</Text>
                            <Button
                                title="Passagem >"
                                color='#FFA500'
                                onPress={() => SalvarDados(destinos[1])}
                            />
                        </View>
                        <View style={styles.cardDestino}>
                            <Text
                                style={styles.tituloDestinos}
                            >{destinos[2].destino}</Text>
                            <Image
                                source={require('../../assets/' + destinos[2].imgName + '.jpg')}
                                style={styles.destinoImg}
                            />
                            <Text
                                style={styles.textDestino}
                            >Preço da passagem: {destinos[2].passagem}</Text>
                            <Button
                                title="Passagem >"
                                color='#FFA500'
                                onPress={() => SalvarDados(destinos[2])}
                            />
                        </View>
                        <View style={styles.cardDestino}>
                            <Text
                                style={styles.tituloDestinos}
                            >{destinos[3].destino}</Text>
                            <Image
                                source={require('../../assets/' + destinos[3].imgName + '.jpg')}
                                style={styles.destinoImg}
                            />
                            <Text
                                style={styles.textDestino}
                            >Preço da passagem: {destinos[3].passagem}</Text>
                            <Button
                                title="Passagem >"
                                color='#FFA500'
                                onPress={() => SalvarDados(destinos[3])}
                            />
                        </View>
                        <View style={styles.cardDestino}>
                            <Text
                                style={styles.tituloDestinos}
                            >{destinos[4].destino}</Text>
                            <Image
                                source={require('../../assets/' + destinos[4].imgName + '.jpg')}
                                style={styles.destinoImg}
                            />
                            <Text
                                style={styles.textDestino}
                            >Preço da passagem: {destinos[4].passagem}</Text>
                            <Button
                                title="Passagem >"
                                color='#FFA500'
                                onPress={() => SalvarDados(destinos[4])}
                            />
                        </View>
                    </View>
                    <StatusBar style="auto" />
                </View>
            </View>
        </ScrollView>
    );

}

export default Destino;