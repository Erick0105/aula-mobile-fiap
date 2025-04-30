import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Image, Button } from 'react-native';
import React, {useState, useEffect, useRef} from 'react';

//Novo Sistema de camera do Expo SDK51+
import { CameraView, useCameraPermissions } from 'expo-camera';

//Importando a galeria do aparelho
import * as MediaLibrary from 'expo-media-library';

export default function App() {
  //Estado de permissao da camera
  const[permissaoCam,requestPermissaoCam]=useCameraPermissions();

  const[camFrontal,setCamFrontal]=useState(false)

  //Estado de permissao da galeria
  const[permissaoGaleria,requestPermissaoGaleria]=MediaLibrary.usePermissions()

  //Estado para realizar a refeência direto de um componente
  const cameraRef = useRef(null);

  //Estado para foto capturada
  const[foto,setFoto]=useState(null);

  //Pedindo permissão galeria no inicio do app
  useEffect(()=>{
    if(!permissaoGaleria) return;
    if (!permissaoGaleria?.granted){
      requestPermissaoGaleria()
    }
  },[])

  

  //Função para tirar foto
  const tirarFoto = async() =>{
    if(cameraRef.current){
      const dadoFoto = await cameraRef.current.takePictureAync()//Captura a foto
      setFoto(dadoFoto)
    }
  }

  //Salvar foto na galeria do aparelho
  const salvarFoto = async() =>{
    if(foto?.uri){
      try{
        await MediaLibrary.createAssetAsync(foto.uri)//salva na galeria
        Alert.alert("Sucesso","Foto Salva")
        setFoto(null)
      }catch{
        Alert.alert("Error", "Não foi possivel salvar a imagem SEU BOSTA")
      }
    }
  }

  //Enquanto a permissao da camera não foi concedido
  if(!permissaoCam) return <View/>

  //Enquanto a permissao foi negada pelo usuário
  if(!permissaoCam?.granted){
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="dark"/>
    </View>
  }

    
  
  return (
    <View style={styles.container}>
      {!foto?(
        <>
          <CameraView 
          ref={cameraRef}
          style={styles.camera}
          facing={!camFrontal?'back':'front'}
          />
          <Button title='Tirar Foto' onPress={tirarFoto}/>
        </>
      ):(
        <>
          <Image source={{uri:foto.uri}} style={{flex:1}}/>
          <Button title='Salvar Foto' onPress={salvarFoto}/>
          <Button title='Tirar outra foto' onPress={()=>setFoto(null)}/>
          <Button tittle='Mudar camera' onPress={(setCamFrontal(!camFrontal))}/>
        </>
      )};
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera:{
    flex:1,
  }
});
