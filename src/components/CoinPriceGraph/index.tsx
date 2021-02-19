import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const CoinPriceGraph = ({ dataString }: CoinPriceGraphProps) => {
  const data = JSON.parse(dataString);
  return (
    <View>
      <LineChart
        data={{
          labels: ["-7d", "-6d", "-5d", "-4d", "-3d", "-2d" , "-1d", "Now"],
          datasets: [
            {
              data,
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        withOuterLines={false}
        withInnerLines={false}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(18, 85 , 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0 , 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "0",
            strokeWidth: "2",
            stroke: "#000000",
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default CoinPriceGraph;

const styles = StyleSheet.create({});
