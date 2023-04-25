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
    paddingBottom: 50,
    color: 'gray'
  },
  text: {
    fontSize: 20,
    marginTop: 30,
    marginBottom: 20,
    color: 'gray'
  },
  viewCheckBox: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20
  },
  checkBox: {
    marginTop: 5,
    marginBottom: 10
  },
  textCheckBox: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 20,
    color: 'gray'
  },
  outer: {
    flex: 1,
  },
  inner: {
    flex: 1
  }
});

export default styles;