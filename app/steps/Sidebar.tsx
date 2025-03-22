import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Overview from "./Overview";
import YourFuture from "./YourFuture";
import YourInvestments from "./YourInvestments";
import CurrentTrends from "./CurrentTrends";
import InvestmentOptions from "./InvestmentOptions";
import Reports from "./Reports";

const Sidebar = () => {
  const [selectedTab, setSelectedTab] = useState("Overview");

  const renderContent = () => {
    switch (selectedTab) {
      case "Overview":
        return <Overview />;
      case "Your Future":
        return <YourFuture />;
      case "Your Investments":
        return <YourInvestments />;
      case "Current Trends":
        return <CurrentTrends />;
      case "Investment Options":
        return <InvestmentOptions />;
      case "Reports":
        return <Reports />;
      default:
        return <Overview />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        {["Overview", "Your Future", "Your Investments", "Current Trends", "Investment Options", "Reports"].map((item) => (
          <TouchableOpacity key={item} onPress={() => setSelectedTab(item)} style={styles.menuItem}>
            <Text style={styles.menuText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.content}>{renderContent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "row" },
  sidebar: { width: 160, backgroundColor: "#2C3E50", paddingVertical: 20 },
  menuItem: { padding: 15, borderBottomWidth: 1, borderBottomColor: "#34495E" },
  menuText: { color: "white", fontSize: 16 },
  content: { flex: 1, padding: 20 },
});

export default Sidebar;
