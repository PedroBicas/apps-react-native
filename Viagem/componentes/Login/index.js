import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { CheckBox, Text, TextInput, Button, View, Image, ScrollView } from 'react-native';
import login from '../dados'
import styles from '../styles'

function Login({ navigation }) {
  const [checar, setChecar] = useState(false)
  const [inputEmail, setInputEmail] = useState("")
  const [inputSenha, setInputSenha] = useState("")
  const [alerta, setAlerta] = useState("")
  function Validar() {
    for (const x in login) {
      if (inputEmail === login[x].email && inputSenha === login[x].senha) {
        navigation.navigate('Destino')
        setAlerta("")
      }
      else {
        setAlerta("E-mail ou senha incorreto")
      }
    }
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
            <Text style={styles.titulo}>Login</Text>

            <Text
              style={styles.text}
            >Seu e-mail:</Text>
            <TextInput
              placeholder='contato@gmail.com'
              placeholderTextColor='#F5DEB3'
              style={styles.input}
              onChangeText={inputEmail => setInputEmail(inputEmail)}
            />

            <Text
              style={styles.text}
            >Sua senha:</Text>
            <TextInput
              placeholder='1234'
              placeholderTextColor='#F5DEB3'
              style={styles.input}
              secureTextEntry={true}
              onChangeText={inputSenha => setInputSenha(inputSenha)}
            />

            <View style={styles.viewCheckBox}>
              <CheckBox
                value={checar}
                onValueChange={setChecar}
              />
              <Text style={styles.textCheckBox}>Manter-me logado</Text>
            </View>
            <Text style={styles.textAlerta}>{alerta}</Text>
            <Button
              title="Logar >"
              onPress={Validar}
              color='#FFA500'
            />
          </View>
          <StatusBar style="auto" />
        </View>
      </View>
    </ScrollView>
  );
}

export default Login;