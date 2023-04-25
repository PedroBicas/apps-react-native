import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 10
    },
    viewHome: {
      paddingBottom: 280,
      paddingLeft: 20, 
      paddingRight: 20, 
      borderRadius: 10
       },
    tituloHome: {
      fontWeight: 200,
      fontSize: 40,
      textAlign: 'center',
      paddingVertical: 50,
      color: '#FF8C00'
    },
    form: {
      paddingTop: 25,
      paddingBottom: 100,
      borderRadius: 10
    },
    logo: {
      width: 300,
      height: 160,
      marginLeft: 25
    },
    titulo: {
      fontWeight: 700,
      fontSize: 40,
      textAlign: 'center',
      color: '#FF8C00',
      paddingTop: 40
    },
    text: { 
      marginTop: 30, 
      marginBottom: 20, 
      color: '#FF8C00' 
    },
    input: { 
      height: 40, 
      width: 350, 
      borderWidth: 1, 
      borderRadius: 4, 
      padding: 4, 
      borderColor: '#FF8C00', 
      color: '#FF8C00' 
    },
    viewCheckBox: { 
      flexDirection: 'row', 
      marginTop: 10,
      marginBottom: 20 
    },
    textCheckBox: { 
      marginLeft: 5,
      marginRight: 5,
      color: '#FF8C00' 
    },
    tituloDestinos: {
      fontWeight: 700,
      fontSize: 30,
      textAlign: 'center',
      color: '#fff'
    },
    textDestino: { 
      marginTop: 30, 
      marginBottom: 20, 
      color: '#fff' 
    },
    cardDestino: {
      flex: 1,
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      backgroundColor: '#FF8C00',
      paddingHorizontal: 35,
      paddingVertical: 35,
      borderRadius: 10,
      marginBottom: 25
    },
    destinoImg: {
      width: 300,
      height: 160,
    },
    textAlerta: { 
      color: 'red', 
      borderRadius: 5, 
      width: 170, 
      marginBottom: 10 },
    outer: {
        flex: 1,
      },
    inner: {
        flex: 1
      }
  });

export default styles;