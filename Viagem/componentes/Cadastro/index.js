import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, TextInput, Button, View, Image, ScrollView } from 'react-native';
import login from '../dados'
import styles from '../styles'

function Cadastro({ navigation }) {

  const [cadastroEmail, setCadastroEmail] = useState("")
  const [cadastroSenha, setCadastroSenha] = useState("")
  const [cadastroNome, setCadastroNome] = useState("")
  const [cadastroCPF, setCadastroCPF] = useState("")
  const [cadastroEndereco, setCadastroEndereco] = useState("")
  const [alerta, setAlerta] = useState("")

  function Cadastrar() {
    if (cadastroEmail != '' || cadastroSenha != '' || cadastroNome != '' || cadastroCPF != '' || cadastroEndereco != '') {
      for (const x in login) {
        if (cadastroEmail === login[x].email) {
          setAlerta("E-mail já cadastrado.")
        }
      }
      login.push({ 'email': cadastroEmail, 'senha': cadastroSenha })
      navigation.navigate('Destino')
    }
    else {
      setAlerta("Insira todos os dados.")
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
            <Text style={styles.titulo}>Cadastro</Text>

            <Text
              style={styles.text}
            >Seu nome:</Text>
            <TextInput
              placeholder='Nome'
              style={styles.input}
              placeholderTextColor='#F5DEB3'
              onChangeText={cadastroNome => setCadastroNome(cadastroNome)}
            />

            <Text
              style={styles.text}
            >Seu CPF:</Text>
            <TextInput
              placeholder='12345678912'
              keyboardType='numeric'
              style={styles.input}
              placeholderTextColor='#F5DEB3'
              onChangeText={cadastroCPF => setCadastroCPF(cadastroCPF)}
            />

            <Text
              style={styles.text}
            >Seu Endereço:</Text>
            <TextInput
              placeholder='Rua João Silva, 123, SP, São Paulo'
              style={styles.input}
              placeholderTextColor='#F5DEB3'
              onChangeText={cadastroEndereco => setCadastroEndereco(cadastroEndereco)}
            />

            <Text
              style={styles.text}
            >Seu e-mail:</Text>
            <TextInput
              placeholder='contato@gmail.com'
              style={styles.input}
              placeholderTextColor='#F5DEB3'
              onChangeText={cadastroEmail => setCadastroEmail(cadastroEmail)}
            />

            <Text
              style={styles.text}
            >Sua senha:</Text>
            <TextInput
              placeholder='1234'
              style={styles.input}
              placeholderTextColor='#F5DEB3'
              secureTextEntry={true}
              onChangeText={cadastroSenha => setCadastroSenha(cadastroSenha)}
            />
            <Text> </Text>
            <Text style={styles.textAlerta}>{alerta}</Text>
            <Button
              title="Cadastrar >"
              onPress={Cadastrar}
              color='#FFA500'
            />
          </View>
          <StatusBar style="auto" />
        </View>
      </View>
    </ScrollView>
  );
}
export default Cadastro;