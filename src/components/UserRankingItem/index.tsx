import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export const UserRankingProps = {
  user: {
    image: String,
    name: String,
    netWorth: Number,
  },
  place: Number,
};

const UserRankingItem = (props: UserRankingProps) => {
  const {
    user: { image, name, netWorth },
    place,
  } = props;

  return (
    <View style={styles.root}>
      <View style={styles.left}>
        <Text style={styles.place}>{place}</Text>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>

      <View style={{ alignItems: "flex-end", justifyContent: 'center'}}>
        <Text>{netWorth}</Text>
      </View>
    </View>
  );
};

export default UserRankingItem;

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

  place: {
    fontSize: 18, 
    fontWeight: 'bold',
    width: 20,
    
  }
});
