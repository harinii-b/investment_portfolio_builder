// (tabs)/_layout.tsx
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: "Dashboard" }} />
    </Tabs>
  );
}