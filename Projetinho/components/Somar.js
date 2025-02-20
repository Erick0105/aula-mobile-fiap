import { Text } from "react-native";
import { View } from "react-native-web";

export default function Somar(props){

    const {pNumero,sNumero} = props
    const soma = pNumero + sNumero
    
    return(
        <View>
            <Text>Somando Número {pNumero} e {sNumero} </Text>
            <Text>Resultado {soma}</Text>
        </View>
    )
}

