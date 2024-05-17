import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="bg-amber-50 flex-1 items-center justify-center">
      <Text className="text-3xl text-amber-300 font-pblack">Hello world!</Text>
      <Link href={'/home'} style={{ color: 'blue' }}>
        Go To Home
      </Link>
      <StatusBar style={'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
