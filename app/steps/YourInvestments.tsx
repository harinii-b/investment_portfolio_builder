import React from "react";
import { View, Text, StyleSheet } from "react-native";

const YourInvestments = () => {
  return (
    <View>
      <Text style={styles.header}>Your Investments</Text>
      <Text>Fetching investment data...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { fontSize: 20, fontWeight: "bold" },
});

export default YourInvestments;
