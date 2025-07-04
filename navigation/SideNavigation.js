import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserProfile from "../pages/userProfile";
import AddNewHorse from "../pages/horseProfile";

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="NewHorse" component={AddNewHorse} />
    </Stack.Navigator>
  );
}
