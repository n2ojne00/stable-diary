import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import colors from '../styles/color';
import Home from '../pages/home';
import MyStable from '../pages/stableView';
import TestStyles from '../pages/style-test';
import AddNewTraining from '../pages/newTraining';
import History from '../pages/history';
import { TabIcons } from '../styles/icons';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          height: hp("8%"),
          borderTopWidth: 1,
          borderColor: colors.lightBrown,
        },
        tabBarActiveTintColor: colors.greenyDark,
        tabBarInactiveTintColor: colors.lightBrown,
        tabBarIcon: ({ color, size }) => TabIcons[route.name]?.(color, 27),
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Stable" component={MyStable} />
      <Tab.Screen name="New Training" component={AddNewTraining} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Profile" component={TestStyles} />
    </Tab.Navigator>
  );
}
