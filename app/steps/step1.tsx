import { View, Text, TextInput, Button} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function Step1Screen() {
  const router = useRouter();

  const [salary, setSalary] = useState('');
  const [savingsPercentage, setSavingsPercentage] = useState('');
  const [riskTolerance, setRiskTolerance] = useState('Medium');
  const [expenses, setExpenses] = useState('');
  const [loanPayments, setLoanPayments] = useState('');

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Step 1: Collect User Data</Text>

      {/* Salary Input */}
      <Text>Salary (₹ per month/year):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter salary"
        value={salary}
        onChangeText={setSalary}
      />

      {/* Savings Percentage */}
      <Text>Savings Percentage (%):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter savings %"
        value={savingsPercentage}
        onChangeText={setSavingsPercentage}
      />

      {/* Risk Tolerance */}
      <Text>Risk Tolerance:</Text>
      <Picker
        selectedValue={riskTolerance}
        style={styles.picker}
        onValueChange={(itemValue) => setRiskTolerance(itemValue)}
      >
        <Picker.Item label="Low" value="Low" />
        <Picker.Item label="Medium" value="Medium" />
        <Picker.Item label="High" value="High" />
      </Picker>

      {/* Living Expenses */}
      <Text>Current Living Expenses (₹ per month):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter expenses"
        value={expenses}
        onChangeText={setExpenses}
      />

      {/* EMI/Loan Payments */}
      <Text>EMI/Loan Payments (₹ per month):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter loan payments"
        value={loanPayments}
        onChangeText={setLoanPayments}
      />

      {/* Next Button */}
      <Button title="Next" onPress={() => router.push('/steps/step2')} />
    </View>
  );
}

// Styles for inputs and picker
const styles = {
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  picker: {
    height: 50,
    marginBottom: 15,
  },
};
