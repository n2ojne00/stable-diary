import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../styles/color';
import { TabIcons } from '../styles/icons';
import { HomeStack, ProfileStack, StableStack } from './SideNavigation';
import AddNewTraining from '../pages/NewTraining';
import History from '../pages/History';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {

          backgroundColor: colors.background,
          borderColor: colors.lightBrown,
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: colors.greenyDark,
        tabBarInactiveTintColor: colors.lightBrown,
        tabBarIcon: ({ color, size, focused }) => (
          <View>
            {TabIcons[route.name]?.(color, 30)}
            {focused && <View style={{ height: 3, backgroundColor: colors.darkBrown, marginTop: 2, borderRadius: 5 }} />}
          </View>
        )
      })}
    >
      <Tab.Screen name="Home"
        component={HomeStack}
        listeners={({ navigation }) => ({
          tabPress: e => {
            navigation.navigate('Home', { screen: 'HomeScreen' });
          },
        })}
      />

      <Tab.Screen name="New Training" component={AddNewTraining}
       options={{ unmountOnBlur: true }} // to reset the form when leaving the tab
      />

      <Tab.Screen name="Stable"
        component={StableStack}
        listeners={({ navigation }) => ({
          tabPress: e => {
            navigation.navigate('Stable', { screen: 'MyStable' });
          },
        })}
      />
      <Tab.Screen name="History"
        component={History}
      /** currently not in use, no side navigation for history
       * listeners={({ navigation }) => ({
          tabPress: e => {
            navigation.navigate('History', { screen: 'HistoryScreen' });
          },
        })}*/
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        listeners={({ navigation }) => ({
          tabPress: e => {
            navigation.navigate('Profile', { screen: 'UserProfile' });
          },
        })}
      />

    </Tab.Navigator>
  );
}
