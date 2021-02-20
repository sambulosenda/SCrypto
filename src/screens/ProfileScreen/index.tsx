import { useNavigation , CommonActions } from "@react-navigation/native";
import { Auth} from "aws-amplify";
import React, {useState} from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import image from "../../assets/images/Saly-1.png";


const ProfileScreen = () => {

    const [user, setuser] = useState({
      id: "1",
      name: "Sambulo Senda",
      email: "sambuo@gma.com",
      image:
            "https://pbs.twimg.com/profile_images/1308470425819787267/ByYHu8Yv_400x400.jpg",
      netWorth: 12234,
      
    });

  const navigation = useNavigation();

    const signout = async () => {
      await Auth.signOut();
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "WelcomeScreen" }],
            })
          );
    }
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <View style={styles.userContainer}>
        <View style={styles.left}>
          <Image style={styles.image} source={{ uri: user.image }} />
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end", justifyContent: "center" }}>
          <Text>${user.netWorth}</Text>
        </View>
          </View>
          
          <Pressable onPress={signout}>
              <Text>Signout</Text>
          </Pressable>
    </View>
  );
};

export default ProfileScreen;

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
  
    userContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
  }
  
  
});
