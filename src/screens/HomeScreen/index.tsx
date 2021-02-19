import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import image from '../../assets/images/Saly-1.png'

const HomeScreen = () => {
    return (
        <View style={styles.root}>
            <Image style={styles.image} source={image} />
            <Text style={styles.header1}>Welcome to Scryto</Text>
            <Text style={styles.header2}>Invest in vertual 100000 and compente with others </Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    root: {
        padding: 20,
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',

    },
    image: {
        height: '40%',
        aspectRatio: 1,
    }, 
    header1: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 50,
    }, 
    header2: {
        fontSize: 20, 
        textAlign: 'center', 
        color: "gray"
    }
    
})
