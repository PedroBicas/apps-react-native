import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, Button, View, ScrollView, CheckBox } from 'react-native';
import styles from '../styles'
import candidatos from '../candidatos'

function Votar({ navigation }) {
    const [Candidato1, setCandidato1] = useState(false)
    const [Candidato2, setCandidato2] = useState(false)
    const [Candidato3, setCandidato3] = useState(false)
    const [Candidato4, setCandidato4] = useState(false)
    const [Branco, setBranco] = useState(false)
    const [bloquearBtn, setBloquearBtn] = useState(false)
    
    function Confirmar() {
        if (Candidato1) {
            candidatos[0].votos += 1
        }
        else if (Candidato2) {
            candidatos[1].votos += 1
        }
        else if (Candidato3) {
            candidatos[2].votos += 1
        }
        else if (Candidato4) {
            candidatos[3].votos += 1
        }
        else if (Branco) {
            candidatos[4].votos += 1
        }
        setBloquearBtn(true)
    }

    return (
        <ScrollView contentContainerStyle={styles.outer}>
            <View style={styles.inner}>
                <View style={styles.container}>
                    <View style={styles.viewVotar}>
                        <Text style={styles.tituloHome}>Candidatos:</Text>
                        <View style={styles.viewCheckBox}>
                            <CheckBox
                                style={styles.checkBox}
                                value={Candidato1}
                                onValueChange={() => {
                                    setCandidato1(true)
                                    setCandidato2(false)
                                    setCandidato3(false)
                                    setCandidato4(false)
                                    setBranco(false)
                                }}
                            />
                            <Text style={styles.textCheckBox}>Candidato 1</Text>
                        </View>
                        <View style={styles.viewCheckBox}>
                            <CheckBox
                                style={styles.checkBox}
                                value={Candidato2}
                                onValueChange={() => {
                                    setCandidato1(false)
                                    setCandidato2(true)
                                    setCandidato3(false)
                                    setCandidato4(false)
                                    setBranco(false)
                                }}
                            />
                            <Text style={styles.textCheckBox}>Candidato 2</Text>
                        </View>
                        <View style={styles.viewCheckBox}>
                            <CheckBox style={styles.checkBox}
                                value={Candidato3}
                                onValueChange={() => {
                                    setCandidato1(false)
                                    setCandidato2(false)
                                    setCandidato3(true)
                                    setCandidato4(false)
                                    setBranco(false)
                                }}
                            />
                            <Text style={styles.textCheckBox}>Candidato 3</Text>
                        </View>
                        <View style={styles.viewCheckBox}>
                            <CheckBox
                                style={styles.checkBox}
                                value={Candidato4}
                                onValueChange={() => {
                                    setCandidato1(false)
                                    setCandidato2(false)
                                    setCandidato3(false)
                                    setCandidato4(true)
                                    setBranco(false)
                                }}
                            />
                            <Text style={styles.textCheckBox}>Candidato 4</Text>
                        </View>
                        <View style={styles.viewCheckBox}>
                            <CheckBox
                                style={styles.checkBox}
                                value={Branco}
                                onValueChange={() => {
                                    setCandidato1(false)
                                    setCandidato2(false)
                                    setCandidato3(false)
                                    setCandidato4(false)
                                    setBranco(true)
                                }}
                            />
                            <Text style={styles.textCheckBox}>Branco</Text>
                        </View>
                        <Button
                            title="Votar"
                            color='gray'
                            disabled={bloquearBtn}
                            onPress={Confirmar}
                        />
                        <Button
                            title="Home"
                            color='gray'
                            onPress={() => navigation.navigate('Home')}
                        />
                        <Text> </Text>
                    </View>
                    <StatusBar style="auto" />
                </View>
            </View>
        </ScrollView>
    );
}
export default Votar;
