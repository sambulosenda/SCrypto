import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";
import { API, graphqlOperation } from "aws-amplify";
import { exchangeCoins } from "../../graphql/mutations";

const CoinExchangeScreen = (props) => {
  const [coinAmount, setcoinAmount] = useState(null);
  const [usdValue, setusdValue] = useState(null);
  const route = useRoute();

  const maxUSD = 100000;

  const isBuy = route?.params?.isBuy;
  const coin = route?.params?.coin;
  const portfolioCoin = route?.params?.portfolioCoin;

  useEffect(() => {
    const amount = parseFloat(coinAmount);
    if (!amount && amount !== 0) {
      setcoinAmount("");
      setusdValue("");
      return;
    }
    setusdValue((amount * coin.currentPrice).toString());
  }, [coinAmount]);

  useEffect(() => {
    const amount = parseFloat(usdValue);
    if (!amount && amount !== 0) {
      setcoinAmount("");
      setusdValue("");
      return;
    }
    setcoinAmount((amount / coin.currentPrice).toString());
  }, [usdValue]);

  const placeOrder = async () => {
    try {
      const response = await API.graphql(
        graphqlOperation(exchangeCoins, {
          coinId: coin.id,
          isBuy,
          amount: parseFloat(coinAmount),
        })
      );
    } catch (e) {
      console.log(e);
    }
  };

  const placeorder = () => {
    if (isBuy && parseFloat(usdValue) > maxUSD) {
      Alert.alert("Error", "Not enough coins");
    }
    if (
      !isBuy &&
      (!portfolioCoin || parseFloat(coinAmount) > portfolioCoin.amount)
    ) {
      Alert.alert(
        "Error",
        `not enough coins ${coin.symbol} coins. Max: ${coin.amount || 0}`
      );
    }

    placeOrder();
  };

  return (
    <View
      style={styles.root}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <Text style={styles.title}>
        {isBuy ? "Buy" : "Sell"}
        {"  "}
        {coin?.name}
      </Text>

      <Text style={styles.subtitle}>
        1{coin?.symbol}
        {"="}
        {coin?.currentPrice}
      </Text>

      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="0"
            keyboardType="decimal-pad"
            value={coinAmount}
            onChangeText={setcoinAmount}
          />
          <Text>{coin?.symbol}</Text>
        </View>
        <Text style={{ fontSize: 30 }}>=</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="0"
            keyboardType="decimal-pad"
            value={usdValue}
            onChangeText={setusdValue}
          />

          <Text>USD</Text>
        </View>
      </View>
      <Pressable style={styles.button} onPress={placeorder}>
        <Text style={styles.btnText}>Place Order</Text>
      </Pressable>
    </View>
  );
};

export default CoinExchangeScreen;

const styles = StyleSheet.create({
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "gray",
    padding: 15,
    flex: 1,
    margin: 20,
  },
  root: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
    color: "grey",
  },
  button: {
    backgroundColor: "#2f95dc",
    marginTop: "auto",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  btnText: {
    color: "white",
  },
});
