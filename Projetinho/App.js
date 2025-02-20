import { Text , View } from "react-native";
import PrimeiroComponente, {SegundoComponente} from "./components/VariosComponents";
import Estilo from "./components/Estilo";
import Somar from "./components/Somar";

export default function App() {
  return (
    <View stely={Estilo.container}>
      <Text style={Estilo.textoPadrao}> TESTANDOOOOOO</Text>
      <PrimeiroComponente/>
      <SegundoComponente/>
      <Somar pNumero = {10} sNumero = {15}/>
    </View>
  )
}

