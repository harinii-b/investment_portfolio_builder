import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";

const YourInvestments = () => {
  const [bonds, setBonds] = useState([]); // State to store fetched bonds
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchBonds = async () => {
      try {
        const response = await fetch("http://10.0.2.2:5000/api/users/bonds"); // Fetch from backend API
        const data = await response.json();
        setBonds(data);
      } catch (error) {
        console.error("Error fetching bonds:", error);
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    };

    fetchBonds();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Investments</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <FlatList
          data={bonds}
          keyExtractor={(item) => item.isin} // Unique key for each bond
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.title}>{item.type} Bond</Text>
              <Text>Maturity: {item.maturity_date}</Text>
              <Text>Currency: {item.currency}</Text>
              <Text>Volume: {item.volume.toLocaleString()}</Text>
              <Text>Coupon: {item.coupon}%</Text>
              <Text>USD Equivalent: ${item.usd_equivalent.toLocaleString()}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  card: { backgroundColor: "#f9f9f9", padding: 12, borderRadius: 8, marginBottom: 10 },
  title: { fontSize: 16, fontWeight: "bold" },
});

export default YourInvestments;
