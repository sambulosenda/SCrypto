import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ImagePropTypes } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import image from "../../assets/images/Saly-1.png";
import MarketCoin from "../../components/MarketCoin";

import { API, graphqlOperation } from "aws-amplify";
import { listCoins } from "../../graphql/queries";

const MarketScreen = () => {
  const [coins, setcoins] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchCoins = async () => {
    setloading(true);
    try {
      const response = await API.graphql(graphqlOperation(listCoins));
      setcoins(response.data.listCoins.items);
      console.log(response);
    } catch {
      console.error(e);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <View style={styles.balanceContainer}>
        <Text style={styles.label}>Market Place</Text>
      </View>

      <FlatList
        style={{ width: "100%" }}
        data={coins}
        onRefresh={fetchCoins}
        refreshing={loading}
        renderItem={({ item }) => <MarketCoin MarketCoin={item} />}
      />
    </View>
  );
};

export default MarketScreen;

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
