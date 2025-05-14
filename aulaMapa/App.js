import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import RNPickerSelect from 'react-native-picker-select'

//Importando a biblioteca de localização
import * as Location from 'expo-location'

//Importando o mapa e o pin vermelho do mapa
import MapView, { Marker } from 'react-native-maps';

const listaAlunos = [
  {label:'Erick',value:'Erick'},
  {label:'Luana',value:'Luana'},
  {label:'Pedro',value:'Pedro Luiz'}
]


export default function App() {

  const [alunoSelecionado, setAlunoSelecionado] = useState('')
  
  //Estado para armazenar a localização(latitude e longitude)
  const [location, setLocation] = useState(null)

  //Estado para armazenar o endereço
  const [address, setAddress] = useState(null)

  //Estado para armazenar o status da permissão
  const [permission, setPermission] = useState(null)

  useEffect(() => {
    (async () => {
      //Solicitar permissão para acessar a loc do dispositivo
      const { status } = await Location.requestForegroundPermissionsAsync()
      setPermission(status)// Armazena o status da permissão

      //Se a permissão foi garantida
      if (status === 'granted') {
        //Obter localização atual do dispositivo
        const userLocation = await Location.getCurrentPositionAsync({})
        setLocation(userLocation.coords)//Salva no estado Location, a latitude e longitude

        const addressResult = await Location.reverseGeocodeAsync(userLocation.coords)
        setAddress(addressResult[0])//Armazena o endereço mais relevante
      }
    })()//Função assíncrona autoexecutável
  }, [])

  //Se a permissão da Loc não for concedida
  if (permission !== 'granted') {
    return (
      <View>
        <Text>Permissão de localização não concedida.</Text>
        <Button title='Solicitar Permissão' onPress={() => {
          (async () => {
            //Solicitar permissão para acessar a loc do dispositivo
            const { status } = await Location.requestForegroundPermissionsAsync()
            setPermission(status)// Armazena o status da permissão
          })()
        }} />
      </View>
    )
  }

  //Função para exibir o endereço
  const renderAddress = () =>{
    if(!address) return <Text>Carregando endereço...</Text>

    const street = address?.street || 'Rua não encontrada.'
    const city = address?.city || 'Cidade não encontrada.'
    const region = address?.region || 'Estado não encontrado.'
    const country = address?.country || 'País não encontrado.'
    const postalCode = address?.postalCode || 'CEP não encontrado.'

    return (
      <View>
        <Text>Endereço completo:</Text>
        <Text>Rua:{street}</Text>
        <Text>Cidade:{city}</Text>
        <Text>Estado:{region}</Text>
        <Text>País:{country}</Text>
        <Text>CEP:{postalCode}</Text>
      </View>
    )

  }

  return (
    <View style={styles.container}>
     <Text>Sua localização</Text>
     {location?(
      <>
        <Text>Minha Latitude:{location.latitude}</Text>
        <Text>Minha Longitude:{location.longitude}</Text>

        <MapView style={{width:'100%',height:400}}
          initialRegion={{
            latitude:location.latitude,
            longitude:location.longitude,
            latitudeDelta:0.01,
            longitudeDelta:0.01
          }}
        >
          <Marker 
            coordinate={{
              latitude:location.latitude,
              longitude:location.longitude
            }}
            title='Você é um Ku'
          />

        </MapView>
        {renderAddress()}
        <RNPickerSelect
          placeholder={{label:'Escolha um aluno',value:null}}
          items={listaAlunos}
          onValueChange={(value)=>setAlunoSelecionado(value)}
        />
        {alunoSelecionado?<Text>Aluno Selecionado: {alunoSelecionado}</Text>:null}
      </>
     ):(
      <Text>Carregando endereço...</Text>
     )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});
