import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, TextInput, Button, View, Image, CheckBox, ScrollView } from 'react-native';
import styles from '../styles'
import destinoFinal from '../destinos'
function Passagem({ navigation }) {
    const [credito, setCredito] = useState(false)
    const [debito, setDebito] = useState(false)
    function checarCredito() {
        setCredito(true)
        setDebito(false)
    }
    function checarDebito() {
        setCredito(false)
        setDebito(true)
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
                        <Image
                            source={require('../../assets/gol.png')}
                            style={styles.logo}
                        />
                        <Text style={styles.titulo}>Passagem</Text>

                        <Text
                            style={styles.text}
                        >Destino:</Text>

                        <TextInput
                            placeholder='Nome da cidade'
                            placeholderTextColor='#F5DEB3'
                            style={styles.input}
                            value={destinoFinal[0].destino}
                            bloqued
                        />

                        <Text
                            style={styles.text}
                        >Origem:</Text>
                        <TextInput
                            placeholder='Nome da cidade'
                            placeholderTextColor='#F5DEB3'
                            style={styles.input}
                        />

                        <Text
                            style={styles.text}
                        >Data da viagem:</Text>

                        <TextInput
                            placeholder='01/01/2000'
                            placeholderTextColor='#F5DEB3'
                            style={styles.input}
                            keyboardType='numeric'
                        />

                        <Text
                            style={styles.text}
                        >Horário do voo:</Text>
                        <TextInput
                            placeholder='12:30'
                            placeholderTextColor='#F5DEB3'
                            style={styles.input}
                            keyboardType='numeric'
                        />

                        <Text
                            style={styles.text}
                        >Preço Passagem:</Text>
                        <TextInput
                            placeholder='500,00'
                            placeholderTextColor='#F5DEB3'
                            style={styles.input}
                            value={destinoFinal[0].passagem}
                            bloqued
                        />
                        <Text
                            style={styles.text}
                        >Froma de pagamento:</Text>
                        <View style={styles.viewCheckBox}>
                            <CheckBox
                                value={credito}
                                onValueChange={checarCredito}
                            />
                            <Text style={styles.textCheckBox}>Credito</Text>
                            <CheckBox
                                value={debito}
                                onValueChange={checarDebito}
                            />
                            <Text style={styles.textCheckBox}>Debito</Text>
                        </View>
                        <Button
                            title="Finalizar >"
                            color='#FFA500'
                        />
                    </View>
                    <StatusBar style="auto" />
                </View>
            </View>
        </ScrollView>
    );

}

export default Passagem;