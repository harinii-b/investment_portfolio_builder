// /app/register.jsx
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import axios from 'axios';

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [income, setIncome] = useState<string>("");
  const [rent, setRent] = useState<string>("");
  const [educationExpenses, setEducationExpenses] = useState<string>("");
  const [healthcareExpenses, setHealthcareExpenses] = useState<string>("");
  const [otherExpenses, setOtherExpenses] = useState<string>("");
  const [savingsPercentage, setSavingsPercentage] = useState<string>("");

  // Register user
  const handleRegister = async () => {
    if (!name || !email || !password || !income || !rent || !educationExpenses || !healthcareExpenses || !otherExpenses || !savingsPercentage) {
      Alert.alert("Error", "Please fill all fields!");
      return;
    }

    try {
      console.log("Sending data:", {
        name, email, password, income: Number(income),
        rent: Number(rent), educationExpenses: Number(educationExpenses),
        healthcareExpenses: Number(healthcareExpenses), otherExpenses: Number(otherExpenses),
        savingsPercentage: Number(savingsPercentage),
      });

      const response = await axios.post("http://10.0.2.2:5000/api/users/register", {
        name,
        email,
        password,
        income: Number(income),
        rent: Number(rent),
        educationExpenses: Number(educationExpenses),
        healthcareExpenses: Number(healthcareExpenses),
        otherExpenses: Number(otherExpenses),
        savingsPercentage: Number(savingsPercentage),
      });

      console.log("Response:", response.data);
      Alert.alert("Success", "Registration successful!", [
        { text: "OK", onPress: () => router.push("/steps/Dashboard") }
      ]);
    } catch (error: any) {
      console.error("Error:", error);
      Alert.alert("Error", error.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back to Home Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/home')}>
        <Text style={styles.backButtonText}>← Back to Home</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Register</Text>

      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Create Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput style={styles.input} placeholder="Income (Monthly/Yearly)" value={income} onChangeText={setIncome} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Rent (Monthly)" value={rent} onChangeText={setRent} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Education Expenses" value={educationExpenses} onChangeText={setEducationExpenses} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Healthcare Expenses" value={healthcareExpenses} onChangeText={setHealthcareExpenses} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Other Expenses" value={otherExpenses} onChangeText={setOtherExpenses} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Savings Percentage" value={savingsPercentage} onChangeText={setSavingsPercentage} keyboardType="numeric" />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5', paddingVertical: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '80%', padding: 12, marginVertical: 8, borderWidth: 1, borderRadius: 8, backgroundColor: '#fff' },
  button: { backgroundColor: '#007bff', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8, marginVertical: 10 },
  buttonText: { color: '#fff', fontSize: 18 },
  linkText: { color: '#007bff', marginTop: 10 },
  backButton: { position: 'absolute', top: 20, left: 20, padding: 10 },
  backButtonText: { fontSize: 16, color: '#007bff' },
});

