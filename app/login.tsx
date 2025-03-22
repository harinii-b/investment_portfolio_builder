// /app/login.tsx
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import axios from 'axios';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password!");
      return;
    }

    try {
      console.log("Logging in with:", { email, password });

      const response = await axios.post("http://10.0.2.2:5000/api/users/login", {
        email,
        password,
      });

      console.log("Response:", response.data);

      Alert.alert("Success", "Login successful!", [{ text: "OK", onPress: () => router.push("/steps/Dashboard") }]);

    } catch (error: any) {
      console.error("Error:", error);
      Alert.alert("Error", error.response?.data?.message || "Login failed!");
    }
  };

  return (
    <View style={styles.container}>
      {/* Back to Home Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/home')}>
        <Text style={styles.backButtonText}>← Back to Home</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Login</Text>

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
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text style={styles.linkText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '80%', padding: 12, marginVertical: 8, borderWidth: 1, borderRadius: 8, backgroundColor: '#fff' },
  button: { backgroundColor: '#007bff', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8, marginVertical: 10 },
  buttonText: { color: '#fff', fontSize: 18 },
  linkText: { color: '#007bff', marginTop: 10 },
});

