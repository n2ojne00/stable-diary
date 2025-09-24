import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserProfile from "../pages/userProfile";
import AddNewHorse from "../pages/addNewHorse";
import FrontScreen from "../pages/frontScreen";
import Settings from "../pages/settings";
import LoginScreen from "../account/LoginScreen";
import SignUpScreen from "../account/SignUpScreen";
import Home from "../pages/home";
import HorseListScreen from "../pages/removeHorse";
import { DeleteUser } from "../account/removeUser";
import { UpdateEmail } from "../account/updateEmail";
import EditHorse from "../pages/editHorseDetail";
import { HorseInformation } from "../components/horseInformation";
import MyStable from "../pages/stableView";
import AddNewTraining from "../pages/NewTraining";


const Stack = createNativeStackNavigator();

export function HomeStack() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="NewHorse" component={AddNewHorse} />
      <Stack.Screen name="New Training" component={AddNewTraining} />
    </Stack.Navigator>
  );
};
export function StableStack() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyStable" component={MyStable} />
      <Stack.Screen name="EditHorse" component={EditHorse} />
      <Stack.Screen name="NewHorse" component={AddNewHorse} />
      <Stack.Screen name="RemoveHorse" component={HorseListScreen} />
    </Stack.Navigator>
  );
};

export function ProfileStack() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="NewHorse" component={AddNewHorse} />
      <Stack.Screen name="EditHorse" component={EditHorse} />
      <Stack.Screen name="SettingsScreen" component={Settings} />
      <Stack.Screen name="RemoveHorse" component={HorseListScreen} />
      <Stack.Screen name="DeleteUser" component={DeleteUser} />
      <Stack.Screen name="UpdateEmail" component={UpdateEmail} />
    </Stack.Navigator>
  );
};

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FrontScreen" component={FrontScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="HomeScreen" component={Home} />

    </Stack.Navigator>
  );
};
