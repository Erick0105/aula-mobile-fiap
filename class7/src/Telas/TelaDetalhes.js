import { Text, ImageBackground, StyleSheet, View , Linking} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import {Ionicons} from "react-native-vector-icons"
import { Image } from "expo-image"

export default function TelaDetalhes({route,navigation}){
    const dados = route.params.item
    return(
        <ImageBackground source={"../../assests/BG.png"} style={styles.container}>
            <SafeAreaView style={{flexDirection:"row"}}>
                <Ionicons name="chevron-back" color="white" size={40} onPress={()=>navigation.goBack()}/>
                <Text>Detalhes</Text>
            </SafeAreaView>
            <View style={styles.imageContainer}>
                <Image source={{uri:dados.images.original.url}} style={{flex:1}}/>
            </View>
            <View onPress={()=>Linking.openURL(dados.images.original.url)}>
                <Text style={{fontSize:25,color:"white"}}>{dados.title}</Text>
                <Ionicons name="globe" color="white" size={40}/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imageContainer:{
        width:"100%",
        height:"50%"
    }
})