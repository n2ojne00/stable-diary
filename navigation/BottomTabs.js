import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import colors from '../styles/color';
import MyStable from '../pages/stableView';
import AddNewTraining from '../pages/newTraining';
import History from '../pages/history';
import { TabIcons } from '../styles/icons';

import ProfileStack from './SideNavigation';
import MainNavigation from './MainNavigation';

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
      <Tab.Screen name="Home" component={MainNavigation} />
      <Tab.Screen name="Stable" component={MyStable} />
      <Tab.Screen name="New Training" component={AddNewTraining} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    
    </Tab.Navigator>
  );
}
