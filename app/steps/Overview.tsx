import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

export default function Overview() {
  const [overview, setOverview] = useState({});
  const [investments, setInvestments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const response = await fetch("http://10.0.2.2:5000/api/users/overview", {
          credentials: "include", // Ensure session cookies are sent
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Failed to fetch overview");

        setOverview(data.overview || {});
        setInvestments(data.investments || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOverview();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#007bff" />;
  if (error) return <Text style={styles.errorText}>Error: {error}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Overview</Text>

      {/* Display User Data */}
      <View style={styles.card}>
        <Text style={styles.label}>Salary: ${overview.salary || 0}</Text>
        <Text style={styles.label}>Savings: {overview.savings || 0}%</Text>
        <Text style={styles.label}>Expenses: ${overview.expenses || 0}</Text>
        <Text style={styles.label}>EMI: ${overview.emi || 0}</Text>
        <Text style={styles.label}>Risk Tolerance: {overview.risk || "N/A"}</Text>
      </View>

      {/* Display Investments */}
      <Text style={styles.subtitle}>Investments</Text>
      {investments.length > 0 ? (
        <FlatList
          data={investments}
          keyExtractor={(item) => item._id || Math.random().toString()} // Avoid crash if _id is missing
          renderItem={({ item }) => (
            <View style={styles.investmentCard}>
              <Text style={styles.label}>Type: {item.type || "N/A"}</Text>
              <Text style={styles.label}>Amount: ${item.amount || 0}</Text>
              <Text style={styles.label}>Return: {item.returnRate || 0}%</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noInvestments}>No investments found</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f4f4f4" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 18, fontWeight: "bold", marginTop: 20 },
  card: { backgroundColor: "#fff", padding: 15, borderRadius: 10, elevation: 3 },
  investmentCard: { backgroundColor: "#e6f7ff", padding: 10, borderRadius: 8, marginVertical: 5 },
  label: { fontSize: 16, marginBottom: 5 },
  noInvestments: { fontSize: 16, color: "gray", textAlign: "center", marginTop: 10 },
  errorText: { color: "red", fontSize: 16, textAlign: "center", marginTop: 20 },
});
