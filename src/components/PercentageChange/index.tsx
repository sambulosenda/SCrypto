import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


interface PercentageChangeProps {

    value: number, 
    style?: object,
}
const PercentageChange = ({ value, style = {}} : PercentageChangeProps) => {
    return (
      <Text style={[style, {color: value > 0 ? "red" : "blue" }]}>
        {value > 0 && "+"} {value} %
      </Text>
    );
}

export default PercentageChange;

const styles = StyleSheet.create({})
