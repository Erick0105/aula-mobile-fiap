import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const[nomeProduto,setNomeproduto]=useState("")
  const[precoProduto,setPrecoProduto]=useState(0)

  async function Salvar(){
    let produtos = []

    if(await AsyncStorage.getItem("PRODUTOS")!=null){

      produtos = JSON.parse(await AsyncStorage.getItem("PRODUTOS"))

    }
      
    //adiciona na Array
      produtos.push({nome:nomeProduto,preco:precoProduto})

      //salvando dados no Async Storage
      await AsyncStorage.setItem("PRODUTOS",JSON.stringify(produtos))
      BuscarDados()
  }

  async function BuscarDados(){
    let p =  JSON.parse(await AsyncStorage.getItem("PRODUTOS"))
  }
  
  return (
    <View style={styles.container}>
      <Text>Cadastro</Text>
      <TextInput
        placeholder='Digite o nome do produto'
        style={styles.input}
        value={nomeProduto}
        onChange={(value)=>setNomeproduto(value)}
      />
      <TextInputMask
        type='money'
        placeholder='Digite o preço do produto'
        style={styles.input}
        value={precoProduto}
        onChange={(value)=>setPrecoProduto(value)}
        keyboardType='number-pad'
      />

      <TouchableOpacity style={styles.btn} onPress={Salvar}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input:{
    borderWidth:1,
    height:50,
    width:300,
    borderRadius:15,
    marginTop:10
  },
  btn:{
    backgroundColor:"blue",
    height:50,
    width:200,
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:15,
    marginTop:10
  }
});
