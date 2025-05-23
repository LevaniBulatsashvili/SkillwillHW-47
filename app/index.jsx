import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "../components/TabNavigator";
import WhatsAppHeader from "../components/WhatsAppHeader";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <WhatsAppHeader />
      <TabNavigator />
    </>
  );
}
