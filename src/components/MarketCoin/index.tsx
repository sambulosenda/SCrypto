import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export const PortfolioCoinProps = {
  MarketCoin: {
    image: String,
    name: String,
    symbol: String,
    valueChange24H: Number,
    valueUSD: Number,
  },
};

const MarketCoin = (props: PortfolioCoinProps) => {
  const {
    MarketCoin: { image, name, symbol, amount, valueChange24H, valueUSD },
  } = props;
  return (
    <View style={styles.root}>
      <View style={styles.left}>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <Text>{valueUSD}</Text>
        <Text style={{ color: valueChange24H > 0 ? "#4db00" : "#f10000" }}>
          {valueChange24H > 0 && "+"} {valueChange24H}
        </Text>
      </View>
    </View>
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
