import React from "react";
import { StyleSheet, Text, View, Image, ImagePropTypes } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import image from "../../assets/images/Saly-1.png";
import PortfolioCoin from "../../components/PortfolioCoin";

const PortfolioCoins = [
  {
    id: "1",
    name: "Virtual Dollars ",
    symbol: "USD",
    image:
      "https://pbs.twimg.com/profile_images/968501175359242240/4u2XgLTL_400x400.jpg",
    amount: 65344,
    valueUSD: 34554,
  },

  {
    id: "2",
    name: "Bitcoin ",
    symbol: "BTC",
    image:
      "https://pbs.twimg.com/profile_images/968501175359242240/4u2XgLTL_400x400.jpg",

    amount: 6344,
    valueUSD: 50554,
  },

  {
    id: "3",
    name: "Etherum",
    symbol: "ETH",
    image:
      "https://pbs.twimg.com/profile_images/968501175359242240/4u2XgLTL_400x400.jpg",

    amount: 10344,
    valueUSD: 54554,
  },
];
const PortfolioScreen = () => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <View style={styles.balanceContainer}>
        <Text style={styles.label}>Portfolio Balance</Text>
        <Text style={styles.balance}>£63254</Text>
      </View>

          <FlatList
              style={{width: '100%'}}
        data={PortfolioCoins}
        renderItem={({ item }) => <PortfolioCoin PortfolioCoin={item} />}
      />
    </View>
  );
};

export default PortfolioScreen;

const styles = StyleSheet.create({
  root: {
    padding: 20,
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    height: 175,
    resizeMode: "contain",
  },

  balanceContainer: {
    width: "100%",
  },

  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
  },
  balance: {
    fontWeight: "bold",
    fontSize: 36,
  },
});
