import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import axios from 'axios';


export default function RegisterScreen() {
    const router = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [salary, setSalary] = useState<string>("");
  const [savingsPercentage, setSavingsPercentage] = useState<string>("");
  const [riskTolerance, setRiskTolerance] = useState<"Low" | "Medium" | "High">("Medium");
  const [expenses, setExpenses] = useState<string>("");
  const [loanPayments, setLoanPayments] = useState<string>("");

  // Register user
 const handleRegister = async () => {
   if (!name || !email || !password || !salary || !savingsPercentage || !expenses || !loanPayments) {
     Alert.alert("Error", "Please fill all fields!");
     return;
   }

   try {
     console.log("Sending data:", {
       name, email, password, salary: Number(salary),
       savings: Number(savingsPercentage), risk: riskTolerance,
       expenses: Number(expenses), emi: Number(loanPayments),
     });

     const response = await axios.post("http://10.0.2.2:5000/api/users/register", {
       name,
       email,
       password,
       salary: Number(salary),
       savings: Number(savingsPercentage),
       risk: riskTolerance,
       expenses: Number(expenses),
       emi: Number(loanPayments),
     });

     console.log("Response:", response.data);
     Alert.alert("Success", "Registration successful!", [
           { text: "OK", onPress: () => router.push("/dashboard") }]); // Navigate to dashboard instead of login
   } catch (error: any) {
     console.error("Error:", error);
     Alert.alert("Error", error.response?.data?.message || "Registration failed!");
   }
 };



  return (
    <View style={styles.container}>
    {/* Back to Home Button */}
          <TouchableOpacity style={styles.backButton} onPress={() => router.push('/')}>
            <Text style={styles.backButtonText}>← Back to Home</Text>
          </TouchableOpacity>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        keyboardType="name"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Create Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Salary (Monthly/Yearly)"
        value={salary}
        onChangeText={setSalary}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Savings Percentage"
        value={savingsPercentage}
        onChangeText={setSavingsPercentage}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Risk Tolerance</Text>
      <Picker selectedValue={riskTolerance} style={styles.picker} onValueChange={(itemValue) => setRiskTolerance(itemValue)}>
        <Picker.Item label="Low" value="Low" />
        <Picker.Item label="Medium" value="Medium" />
        <Picker.Item label="High" value="High" />
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Current Living Expenses (₹/month)"
        value={expenses}
        onChangeText={setExpenses}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="EMI/Loan Payments (₹/month)"
        value={loanPayments}
        onChangeText={setLoanPayments}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '80%', padding: 12, marginVertical: 8, borderWidth: 1, borderRadius: 8, backgroundColor: '#fff' },
  label: { fontSize: 16, fontWeight: 'bold', marginTop: 10 },
  picker: { height: 50, width: '80%' },
  button: { backgroundColor: '#007bff', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8, marginVertical: 10 },
  buttonText: { color: '#fff', fontSize: 18 },
  linkText: { color: '#007bff', marginTop: 10 },
});
