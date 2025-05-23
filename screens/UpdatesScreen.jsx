import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function UpdatesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Updates.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 16, color: "#888" },
});
