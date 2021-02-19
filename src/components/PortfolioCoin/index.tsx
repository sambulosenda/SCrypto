import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export const PortfolioCoinProps = {
  PortfolioCoin: {
    image: String,
    name: String,
    symbol: String,
    amount: Number,
    valueUSD: Number,
  },
};


const PortfolioCoin = (props: PortfolioCoinProps) => {
  const {
    PortfolioCoin: { image, name, symbol, amount, valueUSD },
  } = props;
  
  const navigation = useNavigation();
  return (
      <Pressable style={styles.root} onPress={() => navigation.navigate('CoinDetails')}>
          <View style={styles.left}>
                <Image style={styles.image} source={{ uri: image }} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.symbol}>{symbol}</Text>
      </View>
          </View>
        

          <View style={{alignItems: "flex-end"}}>
        <Text>${valueUSD}</Text>
        <Text>
          {symbol}
          {amount}
        </Text>
      </View>
    </Pressable>
  );
};

export default PortfolioCoin;

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        justifyContent: 'space-between', 
        height: 50, 
        margin: 10,
        marginTop: 30,        
    },
    image: {
        width: 50, 
        height: 50,
        marginRight: 10,
    },

    left: {
        flexDirection: 'row',
        alignItems: 'center'
    }, 
    name: {
        fontWeight: 'bold'
    }, 
    symbol: {
        color: '#b6b6b6'
    }
});
