import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import CallsScreen from "../screens/CallScreen";
import ChatsScreen from "../screens/ChatScreen";
import CommunitiesScreen from "../screens/CommunitiesScreen";
import UpdatesScreen from "../screens/UpdatesScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#075E54",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#fff" },
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Camera")
            return <Feather name="camera" size={size} color={color} />;
          else if (route.name === "Chats")
            return <Ionicons name="chatbubbles" size={size} color={color} />;
          else if (route.name === "Updates")
            return (
              <MaterialCommunityIcons name="update" size={size} color={color} />
            );
          else if (route.name === "Communities")
            return <Ionicons name="people" size={size} color={color} />;
          else route.name === "Calls";
          return <Ionicons name="call" size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Updates" component={UpdatesScreen} />
      <Tab.Screen name="Communities" component={CommunitiesScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
    </Tab.Navigator>
  );
}
