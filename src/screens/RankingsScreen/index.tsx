import React from "react";
import { StyleSheet, Text, View, Image, ImagePropTypes } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import image from "../../assets/images/Saly-1.png";
import MarketCoin from "../../components/MarketCoin";
import UserRankingItem from "../../components/UserRankingItem";

const PortfolioCoins = [
  {
    id: "1",
    name: "Virtual Dollars ",
    image: "https://pbs.twimg.com/profile_images/968501175359242240/4u2XgLTL_400x400.jpg",
    netWorth: 34554,
  },

  {
    id: "2",
    name: "Virtual Dollars ",
    image:"https://pbs.twimg.com/profile_images/968501175359242240/4u2XgLTL_400x400.jpg",
    netWorth: 34554,
  },

  {
    id: "3",
    name: "Bitcoin ",
    image: "https://pbs.twimg.com/profile_images/968501175359242240/4u2XgLTL_400x400.jpg",
    netWorth: 34554,
  },
];
const RankingsScreen = () => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <View style={styles.balanceContainer}>
        <Text style={styles.label}>Rankings</Text>
      </View>
      <FlatList
        style={{ width: "100%" }}
        data={PortfolioCoins}
              renderItem={({ item, index }) => <UserRankingItem user={item} place={index} />}
      />
    </View>
  );
};

export default RankingsScreen;

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
    alignItems: "center",
  },

  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
    alignItems: "center",
  },
  balance: {
    fontWeight: "bold",
    fontSize: 36,
  },
});
