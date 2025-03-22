import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Dashboard() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/steps/Overview")}>
        <Text style={styles.buttonText}>Overview</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/steps/YourFuture")}>
        <Text style={styles.buttonText}>Your Future</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/steps/YourInvestments")}>
        <Text style={styles.buttonText}>Your Investments</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/steps/CurrentTrends")}>
        <Text style={styles.buttonText}>Current Trends</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/steps/InvestmentOptions")}>
        <Text style={styles.buttonText}>Investment Options</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/steps/Reports")}>
        <Text style={styles.buttonText}>Reports</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: { color: "#fff", fontSize: 18 },
});
