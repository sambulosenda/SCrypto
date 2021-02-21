import { useNavigation, CommonActions } from "@react-navigation/native";
import { Auth, Hub } from "aws-amplify";
import React, { useEffect, useContext } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import image from "../../assets/images/Saly-1.png";
import AppContext from "../../utils/AppContext";

const googleButtonImage = require("../../assets/images/googlebutton.png");

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const { setUserId } = useContext(AppContext);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await Auth.currentAuthenticatedUser();

      if (user) {
        setUserId(user.attributes.sub);
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Root" }],
          })
        );
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      if (event === "signIn") {
        console.log(data);
        setUserId(data.signInUserSession.accessToken.payload.sub);
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Root" }],
          })
        );
      }
    });
  }, []);

  const signInGoogle = async () => {
    await Auth.federatedSignIn({ provider: "google" });
  };
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <Text style={styles.header1}>Welcome to Scryto</Text>
      <Text style={styles.header2}>
        Invest in vertual 100000 and compente with others{" "}
      </Text>

      <Pressable onPress={signInGoogle} style={styles.googleButton}>
        <Image style={styles.buttonImage} source={googleButtonImage} />
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  root: {
    padding: 20,
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    height: "40%",
    aspectRatio: 1,
  },
  header1: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
  },
  header2: {
    fontSize: 20,
    textAlign: "center",
    color: "gray",
  },
  googleButton: {
    marginTop: "auto",
    marginBottom: 50,
  },
  buttonImage: {
    height: 70,
    resizeMode: "contain",
  },
});
