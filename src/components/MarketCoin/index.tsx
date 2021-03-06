import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import PercentageChange from "../PercentageChange";

export const PortfolioCoinProps = {
  MarketCoin: {
    id: String,
    image: String,
    name: String,
    symbol: String,
    valueChange24H: Number,
    currentPrice: Number,
  },
};


const MarketCoin = (props: PortfolioCoinProps) => {
  const {
    MarketCoin: { id, image, name, symbol, amount, valueChange24H, currentPrice},
  } = props;

  const navigation = useNavigation();
  return (
    <Pressable style={styles.root} onPress={() => navigation.navigate('CoinDetails', {id})}>
      <View style={styles.left}>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <Text>${currentPrice}</Text>
       <PercentageChange value={valueChange24H} />
      </View>
    </Pressable>
  );
};

export default MarketCoin;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
  },
  symbol: {
    color: "#b6b6b6",
  },
});
