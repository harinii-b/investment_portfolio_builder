import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function DashboardScreen() {
    const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState('Overview');
  const sidebarWidth = new Animated.Value(sidebarOpen ? 200 : 60);

  const toggleSidebar = () => {
    Animated.timing(sidebarWidth, {
      toValue: sidebarOpen ? 60 : 200,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setSidebarOpen(!sidebarOpen);
  };
  const handleLogout = () => {
      router.push('/');
  };

  const menuItems = [
    'Overview',
    'Your Investments',
    'Current Trends',
    'Investment Options',
    'Reports',
    'Settings',
  ];

  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <Animated.View style={[styles.sidebar, { width: sidebarWidth }]}>
        <TouchableOpacity style={styles.toggleButton} onPress={toggleSidebar}>
          <Text style={styles.toggleText}>{sidebarOpen ? '◀' : '▶'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.homeButton} onPress={() => setSelectedMenu('Overview')}>
          <Text style={styles.homeText}>🏠 {sidebarOpen ? 'Home' : ''}</Text>
        </TouchableOpacity>

        {menuItems.map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.menuItem, selectedMenu === item && styles.activeMenu]}
            onPress={() => setSelectedMenu(item)}
          >
            <Text style={styles.menuText}>{sidebarOpen ? item : item[0]}</Text>
          </TouchableOpacity>
        ))}
        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>🚪 {sidebarOpen ? 'Logout' : ''}</Text>
        </TouchableOpacity>
      </Animated.View>
      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.heading}>{selectedMenu}</Text>
        <Text style={styles.content}>Content for {selectedMenu} goes here...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row', backgroundColor: '#f5f5f5' },

  // Sidebar Styles
  sidebar: { backgroundColor: '#007bff', paddingVertical: 20, alignItems: 'center' },
  toggleButton: { padding: 10, backgroundColor: '#0056b3', marginBottom: 10, borderRadius: 5 },
  toggleText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  homeButton: { padding: 15, backgroundColor: '#0056b3', marginBottom: 10, width: '90%', alignItems: 'center' },
  homeText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  menuItem: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#fff', width: '90%', alignItems: 'center' },
  activeMenu: { backgroundColor: '#0056b3' },
  menuText: { color: '#fff', fontSize: 16 },

  // Main Content
  mainContent: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  content: { fontSize: 16, color: '#333' },
});
