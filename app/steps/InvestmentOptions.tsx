import { View, Text, StyleSheet } from "react-native";

export default function InvestmentOptions() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Investment Options</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});


