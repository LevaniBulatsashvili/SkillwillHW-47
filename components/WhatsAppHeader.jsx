import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function WhatsAppHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.leftSection}>
        <Text style={styles.title}>WhatsApp</Text>
      </View>
      <View style={styles.icons}>
        <Feather name="camera" size={18} color="white" />
        <Ionicons name="search" size={18} color="white" />
        <MaterialIcons name="more-vert" size={18} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#075E54",
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginLeft: 5,
  },
  icons: {
    flexDirection: "row",
    gap: 20,
  },
});
