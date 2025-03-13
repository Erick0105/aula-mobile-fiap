import { View, Text } from "react-native";

export default (props) => {
  const { name, price, percent } = props; 
  
  const newPrice = price + price * percent / 100;

  return (
    <View>
      <Text>O novo preço do produto {name} é de </Text>
      <Text>{newPrice.toFixed(2)}</Text>
    </View>
  );
};
