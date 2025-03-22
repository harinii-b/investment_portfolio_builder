import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

const BondCard = ({ bond }) => {
  const handleInvest = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:5000/api/users/invest', bond);
      Alert.alert('Investment Successful', `Invested in ${bond.type} Bond!`);
    } catch (error) {
      Alert.alert('Investment Failed', 'Something went wrong. Try again.');
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{bond.type} Bond</Text>
      <Text>Maturity Date: {bond.maturity_date}</Text>
      <Text>Settlement Date: {bond.settlement_date}</Text>
      <Text>Volume: {bond.volume.toLocaleString()} {bond.currency}</Text>
      <Text>Coupon Rate: {bond.coupon * 100}%</Text>
      <Text>USD Equivalent: ${bond.usd_equivalent.toLocaleString()}</Text>

      {/* Invest Button */}
      <TouchableOpacity style={styles.button} onPress={handleInvest}>
        <Text style={styles.buttonText}>Invest</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 12,
    margin: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  button: {
    marginTop: 10,
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default BondCard;
