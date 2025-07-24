import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserProfile from "../pages/userProfile";
import AddNewHorse from "../pages/addNewHorse";
import FrontScreen from "../pages/frontScreen";
import Settings from "../pages/settings";
import LoginScreen from "../account/LoginScreen";
import SignUpScreen from "../account/SignUpScreen";
import Home from "../pages/home";

const Stack = createNativeStackNavigator();

export function HomeStack() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={Home} />
            <Stack.Screen name="NewHorse" component={AddNewHorse} />
            
        </Stack.Navigator>
    );
};

export function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="NewHorse" component={AddNewHorse} />
      <Stack.Screen name="SettingsScreen" component={Settings} />
     
    </Stack.Navigator>
  );
};

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FrontScreen" component={FrontScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};
