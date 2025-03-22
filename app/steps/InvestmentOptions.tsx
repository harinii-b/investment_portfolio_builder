import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text, ActivityIndicator } from "react-native";
import { Picker } from "@react-native-picker/picker";
import BondCard from "./BondCard";

const InvestmentOptions = () => {
  const [investments, setInvestments] = useState([]);
  const [sortedInvestments, setSortedInvestments] = useState([]);
  const [selectedCriteria, setSelectedCriteria] = useState("combined");
  const [loading, setLoading] = useState(true);

  // Fetch investments from the backend
  useEffect(() => {
    const fetchInvestments = async () => {
      try {
        const response = await fetch("http://10.0.2.2:5000/api/users/investments"); // Replace with your backend URL
        const data = await response.json();
        setInvestments(data);
        setSortedInvestments(data);
      } catch (error) {
        console.error("Error fetching investments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInvestments();
  }, []);

  // Sorting function
  const sortInvestments = (criteria) => {
    if (!investments.length) return;

    const sorted = [...investments].sort((a, b) => {
      if (criteria === "volume") return b.volume - a.volume;
      if (criteria === "coupon") return b.coupon - a.coupon;
      if (criteria === "usd") return b.usd_equivalent - a.usd_equivalent;
      return (b.volume * 0.4 + b.coupon * 0.3 + b.usd_equivalent * 0.3) -
             (a.volume * 0.4 + a.coupon * 0.3 + a.usd_equivalent * 0.3);
    });

    setSortedInvestments(sorted);
    setSelectedCriteria(criteria);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sort Investments by:</Text>
      <Picker selectedValue={selectedCriteria} style={styles.picker} onValueChange={(itemValue) => sortInvestments(itemValue)}>
        <Picker.Item label="Best Investment (Combined)" value="combined" />
        <Picker.Item label="Highest Volume" value="volume" />
        <Picker.Item label="Highest Coupon Rate" value="coupon" />
        <Picker.Item label="Highest USD Equivalent" value="usd" />
      </Picker>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={sortedInvestments}
          keyExtractor={(item) => item._id} // Ensure MongoDB returns an _id field
          renderItem={({ item }) => <BondCard bond={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#f4f4f4" },
  heading: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  picker: { height: 50, backgroundColor: "#fff", borderRadius: 5, marginBottom: 10 },
});

export default InvestmentOptions;
