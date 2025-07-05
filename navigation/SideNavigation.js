import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserProfile from "../pages/userProfile";
import AddNewHorse from "../pages/addNewHorse";
import Settings from "../pages/settings";

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="NewHorse" component={AddNewHorse} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
