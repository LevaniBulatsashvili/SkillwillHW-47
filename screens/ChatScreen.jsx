import { Ionicons } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, View } from "react-native";

const chats = [
  { id: "1", name: "Alice", lastMessage: "Hey, how are you?" },
  { id: "2", name: "Bob", lastMessage: "Let’s catch up later." },
  {
    id: "3",
    name: "Charlie",
    lastMessage: "Don’t forget the meeting tomorrow.",
  },
  { id: "4", name: "Diana", lastMessage: "That was hilarious" },
];

export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { name, lastMessage } }) => (
          <View style={styles.chatItem}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.message}>{lastMessage}</Text>
          </View>
        )}
      />

      <View style={styles.contacts} onPress={() => {}}>
        <Ionicons name="add-circle" size={32} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  chatItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  name: { fontWeight: "bold", fontSize: 16 },
  message: { color: "#888", marginTop: 4 },
  contacts: {
    position: "absolute",
    right: 20,
    bottom: 30,
    backgroundColor: "#25D366",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
});
