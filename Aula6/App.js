import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TextInput} from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native-web';


export default function App() {
  
  const[nomeAluno, setNomeAluno] = useState('');
  const[emailAluno, setEmailAluno] = useState('');
  const[pessoa, setPessoa] = useState({
    nome: "",
    email: "",
  });

  return (
    <View style={styles.container}>
      <Image source={require("./assets/crist.png")} style={styles.imagem}/>
      <Text>{pessoa.nome} | {pessoa.email}</Text>
      <TextInput 
        placeholder='Digite seu nome'
        style={styles.input}
        value={nomeAluno}
        onChangeText={(value)=> setNomeAluno(value)}
        keyboardType='default'
        maxLength={10}
      />
      <TextInput
        placeholder='Digite seu email'
        style={styles.input}
        value={emailAluno}
        onChangeText={(value) => setEmailAluno(value)}
        keyboardType="default"
      />
      <Button onPress={()=>setPessoa({nome: {nomeAluno},email: {emailAluno}})}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: "space-between",
  },
  imagem: {
    resizeMode:"center",
    width:1500,
  },
  inputs: {
    borderColor: 'white',
    justifyContent: "space-around",
  },
  input:{
    backgroundColor: 'white',
    width:300,
    borderRadius:20,
    paddingLeft:10,
    borderWidth:2,
    borderColor:'red',
    fontSize:15,
  },
});
