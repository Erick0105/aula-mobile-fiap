import { useState } from 'react';
import { Text, View, Image, TextInput, Button , StyleSheet} from 'react-native';
import Calculate from './components/calculate.js';  

export default function App() {
  const [nameProduct, setNameProduct] = useState(''); 
  const [priceProduct, setPriceProduct] = useState(''); 
  const [percentProduct, setPercentProduct] = useState(''); 
  const [showData, setShowData] = useState(false); 

  const handleNameChange = (text) => setNameProduct(text);
  const handlePriceChange = (text) => setPriceProduct(text);
  const handlePercentChange = (text) => setPercentProduct(text);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/products.png')} />
      <View style={styles.information}>
        <Text>CP1 Mobile Application Developer</Text>
        <Text>Erick Alves | RM 556862</Text>
      </View>
      

      <View >
        
        <View>
          <Text style={styles.text}>Insira o nome do produto</Text>
          <TextInput 
            style={styles.inputs}
            placeholder='Nome do produto' 
            maxLength={100} 
            value={nameProduct} 
            onChangeText={handleNameChange} 
          />
        </View>
        
        
        <View>
          <Text style={styles.text}>Qual o valor atual desse produto?</Text>
          <TextInput 
            style={styles.inputs}
            placeholder='Preço' 
            keyboardType='decimal-pad' 
            maxLength={100} 
            value={priceProduct} 
            onChangeText={handlePriceChange}
          />
        </View>

        
        <View>
          <Text style={styles.text}>Em % qual será o aumento no preço deste produto?</Text>
          <TextInput
            style={styles.inputs}
            placeholder='Percentual' 
            keyboardType='number-pad' 
            maxLength={100} 
            value={percentProduct} 
            onChangeText={handlePercentChange} 
          />
        </View>

        
        <Button title='Calcular novo preço' onPress={() => setShowData(true)} />
      </View>

      <View>
        {showData && (
          <Calculate 
            name={nameProduct} 
            price={parseFloat(priceProduct)}  
            percent={parseFloat(percentProduct)}  
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#00B4E5",
    flex:1,
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  image:{
    resizeMode:'center',
    height:100,
  },
  information:{
    borderColor:'#153B50',
    borderBottomWidth:5,
    height:50,
    justifyContent:'space-around',
  },
  inputs:{
    backgroundColor:'#ECEBE4',
    marginVertical:20,
    borderRadius:10,
  },
  text:{
    fontSize:16,
    fontWeight:'bold',
    color:'#565254'
  }
});