import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Updates from "expo-updates";
import { useEffect } from "react";

export default function App() {
  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      // You can also add an alert() to see the error message in case of an error when fetching updates.
      alert(`Error fetching latest Expo update: ${error}`);
    }
  }

  useEffect(() => {
    console.log("FETCHING UPDATE");
    onFetchUpdateAsync();
    console.log("AFTER FETCHING UPDATE");
  }, []);

  return (
    <View style={styles.container}>
      <Text>
        This app was built on:
        {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
