import { useState } from 'react';
import { Text, View, Image, TextInput, Button } from 'react-native';
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
    <View>
      <Image source={require('./assets/products.png')} />
      <View>
        <Text>CP1 Mobile Application Developer</Text>
        <Text>Erick Alves | RM 556862</Text>
      </View>

      <View>
        
        <View>
          <Text>Insira o nome do produto</Text>
          <TextInput 
            placeholder='Nome do produto' 
            maxLength={100} 
            value={nameProduct} 
            onChangeText={handleNameChange} 
          />
        </View>

        
        <View>
          <Text>Qual o valor atual desse produto?</Text>
          <TextInput 
            placeholder='Preço' 
            keyboardType='decimal-pad' 
            maxLength={100} 
            value={priceProduct} 
            onChangeText={handlePriceChange}
          />
        </View>

        
        <View>
          <Text>Em % qual será o aumento no preço deste produto?</Text>
          <TextInput 
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
