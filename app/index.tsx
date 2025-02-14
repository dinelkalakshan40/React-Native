import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Link} from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text><br/>
      <StatusBar style="auto" />
      <Link href="/dashboard">Go to DashBoard</Link>
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
